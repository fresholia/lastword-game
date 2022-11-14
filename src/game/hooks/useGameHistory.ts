import { useCallback } from 'react';
import { useDispatchAppContextState, useGameState } from 'core/app/context/AppContext.utils';
import useCurrentPlayer from './useCurrentPlayer';

function useGameHistory() {
  const { history } = useGameState();
  const { currentPlayer } = useCurrentPlayer();
  const dispatch = useDispatchAppContextState();

  const addHistoryItem = useCallback(
    (word: string) => {
      dispatch({ type: 'ADD_HISTORY_ITEM', payload: { word, player: currentPlayer } });
    },
    [dispatch, currentPlayer],
  );

  const resetGameHistory = useCallback(() => {
    dispatch({ type: 'RESET_GAME_HISTORY' });
  }, [dispatch]);

  return { history, addHistoryItem, resetGameHistory };
}

export default useGameHistory;
