import { createContext, Dispatch, useMemo, useReducer } from 'react';
import { initialRadioGroupState } from './RadioGroupContext.constants';
import { radioGroupContextReducer } from './RadioGroupContext.reducer';
import {
  RadioGroupContextReducerAction,
  RadioGroupContextProviderProps,
} from './RadioGroupContext.types';

const initialContextValue = {
  state: initialRadioGroupState,
  dispatch: (() => undefined) as Dispatch<RadioGroupContextReducerAction>,
};

const RadioGroupContext = createContext(initialContextValue);

RadioGroupContext.displayName = 'RadioGroupContext';

function RadioGroupContextProvider({
  children,
  initialValue = initialRadioGroupState,
}: RadioGroupContextProviderProps) {
  const [state, dispatch] = useReducer(
    radioGroupContextReducer,
    initialValue || initialRadioGroupState,
  );

  const providerValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <RadioGroupContext.Provider value={providerValue}>{children}</RadioGroupContext.Provider>;
}

export { RadioGroupContext, RadioGroupContextProvider };
