import { useCallback } from 'react';

import useAppContext from 'core/app/context/AppContext.utils';
import useSettings from './useSettings';

function useSounds() {
  const { sounds } = useSettings();
  const { dispatch } = useAppContext();

  const setSounds = useCallback(
    (value: boolean) => {
      dispatch({
        type: 'SET_SETTINGS_VALUE',
        payload: {
          key: 'sounds',
          value,
        },
      });
    },
    [dispatch],
  );

  return { sounds, setSounds };
}

export default useSounds;
