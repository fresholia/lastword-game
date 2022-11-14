import { GAME_STATUS, REASONS, PLAYER } from 'core/app/context/AppContext.types';

import { checkAnswerValidity } from 'game/utils/gameUtils';

import useGameConfig from 'settings/hooks/useGameConfig';
import useCountdown from 'core/utils/hooks/useCountdown';
import useCurrentPlayer from './useCurrentPlayer';
import useGameHistory from './useGameHistory';
import useGameStatus from './useGameStatus';
import useComputerAnswer from './useComputerAnswer';

function useAnswer() {
  const { endGame } = useGameStatus();
  const { timeLimit } = useGameConfig();
  const { history, addHistoryItem } = useGameHistory();
  const { currentPlayer, setCurrentPlayer } = useCurrentPlayer();

  const { resetCountdown, remainingSeconds } = useCountdown({
    seconds: timeLimit,
    onEnd: () => {
      const status = currentPlayer === PLAYER.USER ? GAME_STATUS.LOST : GAME_STATUS.WON;
      endGame(status, REASONS.TIMEOUT, '');
    },
  });

  useComputerAnswer({ resetCountdown });

  const handleUserAnswer = (word: string) => {
    if (currentPlayer === PLAYER.COMPUTER) {
      return;
    }

    const { isValid, reason } = checkAnswerValidity(word, history);
    if (isValid) {
      addHistoryItem(word);

      setCurrentPlayer(PLAYER.COMPUTER);
      resetCountdown();
    } else {
      endGame(GAME_STATUS.LOST, reason as REASONS, word);
    }
  };

  return { handleUserAnswer, remainingSeconds };
}
export default useAnswer;
