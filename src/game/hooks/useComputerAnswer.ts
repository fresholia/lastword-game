import { useEffect, useRef } from 'react';

import useGameConfig from 'settings/hooks/useGameConfig';
import { generateComputerAnswer } from 'game/utils/gameUtils';
import useCountdown from 'core/utils/hooks/useCountdown';
import useSpeechSynthesizer from 'core/utils/hooks/useSpeechSynthesizer';

import { GAME_STATUS, PLAYER, REASONS } from 'core/app/context/AppContext.types';
import useGameHistory from './useGameHistory';
import useCurrentPlayer from './useCurrentPlayer';
import useGameStatus from './useGameStatus';

type UseComputerAnswerProps = Pick<ReturnType<typeof useCountdown>, 'resetCountdown'>;

function useComputerAnswer({ resetCountdown }: UseComputerAnswerProps) {
  const { endGame } = useGameStatus();
  const { history } = useGameHistory();
  const { currentPlayer, setCurrentPlayer } = useCurrentPlayer();
  const { addHistoryItem } = useGameHistory();
  const { timeLimit, computerWinRate } = useGameConfig();

  const { speak } = useSpeechSynthesizer();

  const timeoutRef = useRef<any>();

  /*
  NOTE:
    I could not use the useCallback hook here, because
    when useCallback hooks are called between each other,
    their dependencies are not updated.

    So, here I have used useEffect as an alternative,
    I could use a pure function, but that would waste all the hooks I wrote.
  */
  useEffect(() => {
    if (currentPlayer !== PLAYER.COMPUTER) {
      return () => {};
    }

    const answer = generateComputerAnswer(history, computerWinRate);
    const randomTime = (timeLimit - Math.floor(Math.random() * timeLimit)) * 1000;
    const timeout = answer ? randomTime : timeLimit * 1000;

    timeoutRef.current = setTimeout(() => {
      if (answer) {
        speak(answer);
        addHistoryItem(answer);
        setCurrentPlayer(PLAYER.USER);
        resetCountdown();
      } else {
        endGame(GAME_STATUS.WON, REASONS.COMPUTER_TIMEOUT, '');
      }
    }, timeout);

    return () => clearTimeout(timeoutRef.current);
  }, [
    addHistoryItem,
    computerWinRate,
    currentPlayer,
    endGame,
    history,
    resetCountdown,
    setCurrentPlayer,
    speak,
    timeLimit,
  ]);
}

export default useComputerAnswer;
