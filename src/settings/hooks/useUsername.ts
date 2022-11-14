import { initialAppState } from 'core/app/context/AppContext.constants';
import useAppContext from 'core/app/context/AppContext.utils';
import { useCallback } from 'react';

function useUsername() {
  const {
    state: {
      settings: { username },
    },
    dispatch,
  } = useAppContext();

  const setUsername = useCallback(
    (value: typeof initialAppState.settings.username) => {
      dispatch({
        type: 'SET_SETTINGS_VALUE',
        payload: {
          key: 'username',
          value,
        },
      });
    },
    [dispatch],
  );

  return { username, setUsername };
}

export default useUsername;
