import { useCallback } from 'react';
import { useDispatchAppContextState, useGameState } from 'core/app/context/AppContext.utils';
import { PLAYER } from 'core/app/context/AppContext.types';

function useCurrentPlayer() {
  const { currentPlayer } = useGameState();
  const dispatch = useDispatchAppContextState();

  const setCurrentPlayer = useCallback(
    (player: PLAYER) => {
      dispatch({ type: 'SET_CURRENT_PLAYER', payload: player });
    },
    [dispatch],
  );

  return { currentPlayer, setCurrentPlayer };
}

export default useCurrentPlayer;
