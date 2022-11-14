import { GAME_DIFFICULTIES } from 'core/app/context/AppContext.types';
import useAppContext from 'core/app/context/AppContext.utils';
import { useCallback } from 'react';
import useSettings from './useSettings';

function useDifficulty() {
  const { difficulty } = useSettings();
  const { dispatch } = useAppContext();

  const setDifficulty = useCallback(
    (value: GAME_DIFFICULTIES) => {
      dispatch({
        type: 'SET_SETTINGS_VALUE',
        payload: {
          key: 'difficulty',
          value,
        },
      });
    },
    [dispatch],
  );

  return { difficulty, setDifficulty };
}

export default useDifficulty;
