import { useCallback } from 'react';
import { useDispatchAppContextState, useGameState } from 'core/app/context/AppContext.utils';
import { useNavigate } from 'react-router-dom';
import ROUTES from 'core/app/routes/routes';
import { GAME_STATUS, REASONS } from 'core/app/context/AppContext.types';

function useGameStatus() {
  const { status } = useGameState();
  const dispatch = useDispatchAppContextState();
  const navigate = useNavigate();

  const resetGame = useCallback(() => {
    dispatch({ type: 'RESET_GAME_STATE' });
    navigate(ROUTES.GAME);
  }, [dispatch, navigate]);

  const startGame = useCallback(() => {
    navigator.mediaDevices
      .getUserMedia({ video: false, audio: true })
      .then(() => {
        dispatch({
          type: 'SET_GAME_STATUS',
          payload: GAME_STATUS.PLAYING,
        });
        navigate(ROUTES.GAME);
      })
      .catch(() => {});
  }, [dispatch, navigate]);

  const endGame = useCallback(
    (status: GAME_STATUS, reason: REASONS, lastWord: string) => {
      dispatch({
        type: 'SET_GAME_STATUS',
        payload: status,
      });
      dispatch({
        type: 'SET_GAME_RESULT',
        payload: {
          reason,
          lastWord,
        },
      });
      navigate(ROUTES.RESULT);
    },
    [dispatch, navigate],
  );

  return {
    status,
    startGame,
    endGame,
    resetGame,
  };
}

export default useGameStatus;
