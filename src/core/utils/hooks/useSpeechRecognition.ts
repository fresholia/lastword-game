import { useCallback, useState } from 'react';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
// recognition.interimResults = true;
recognition.lang = 'tr-TR';

type RecognitionState = {
  transcript: string;
  isListening: boolean;
};

type UseSpeechRecognitionProps = {
  // eslint-disable-next-line no-unused-vars
  onEnd: (transcript: string) => void;
};

const initialRecognitionState: RecognitionState = {
  transcript: '',
  isListening: false,
};

function useSpeechRecognition({ onEnd }: UseSpeechRecognitionProps) {
  const [recognitionState, setRecognitionState] =
    useState<RecognitionState>(initialRecognitionState);
  const { isListening } = recognitionState;

  const handleSetRecording = useCallback(
    (value: boolean) => {
      setRecognitionState({
        ...recognitionState,
        isListening: value,
      });
    },
    [recognitionState],
  );

  const handleSetTranscript = useCallback(
    (value: string) => {
      setRecognitionState({
        ...recognitionState,
        transcript: value,
      });
    },
    [recognitionState],
  );

  const handleResetRecordingState = () => {
    setRecognitionState(initialRecognitionState);
  };

  recognition.onresult = (event) => {
    if (!recognitionState.isListening) return;
    const transcript = Array.from(event.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join('')
      .toLocaleLowerCase('tr-TR')
      .trim();

    handleSetTranscript(transcript);
  };

  recognition.onend = () => {
    handleResetRecordingState();

    // Get last word from string
    const lastWord = recognitionState.transcript
      .split(' ')
      .filter((word) => word)
      .pop()
      ?.trim()
      .toLocaleLowerCase('tr-TR')
      .slice(0, -1);

    if (lastWord) {
      onEnd(lastWord);
    }
  };

  const startRecording = useCallback(() => {
    if (recognitionState.isListening) {
      throw new Error('Already listening');
    }

    recognition.start();
    handleSetRecording(true);
  }, [recognitionState, handleSetRecording]);

  const stopRecording = useCallback(() => {
    if (!recognitionState.isListening) {
      throw new Error('Not listening');
    }

    recognition.stop();
    handleResetRecordingState();
  }, [recognitionState]);

  return { startRecording, stopRecording, isListening };
}

export default useSpeechRecognition;
