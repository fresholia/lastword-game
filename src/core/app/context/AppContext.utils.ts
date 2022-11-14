import { useContext } from 'react';
import { AppContext } from 'core/app/context/AppContext';
import { ContextUsedOutsideProviderError } from 'core/utils/error/ContextUsedOutsideProviderError';

function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new ContextUsedOutsideProviderError(context);
  }

  return context;
}

function useDispatchAppContextState() {
  const { dispatch } = useAppContext();
  return dispatch;
}

function useGameState() {
  const {
    state: { game },
  } = useAppContext();

  return game;
}

export default useAppContext;
export { useGameState, useDispatchAppContextState };
