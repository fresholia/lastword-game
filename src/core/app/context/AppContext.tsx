import { createContext, Dispatch, ReactNode, useMemo, useReducer } from 'react';
import { appStateReducer } from './AppContext.reducer';
import { AppStateReducerAction } from './AppContext.types';
import { initialAppState } from './AppContext.constants';

const initialAppContextValue = {
  state: initialAppState,
  dispatch: (() => undefined) as Dispatch<AppStateReducerAction>,
};

const AppContext = createContext(initialAppContextValue);

AppContext.displayName = 'AppContext';

function AppContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appStateReducer, initialAppState);

  const providerValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>;
}

export { AppContext, AppContextProvider };
