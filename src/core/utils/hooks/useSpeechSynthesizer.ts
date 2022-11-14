import { useCallback } from 'react';
import useSounds from 'settings/hooks/useSounds';

function useSpeechSynthesizer() {
  const { sounds } = useSounds();

  const speak = useCallback(
    (text: string) => {
      if (sounds) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        speechSynthesis.speak(utterance);
      }
    },
    [sounds],
  );

  return { speak };
}

export default useSpeechSynthesizer;
