import { useCallback, ChangeEvent } from 'react';
import useRadioGroupContext from '../context/RadioGroupContext.utils';

function useRadioGroup() {
  const { state, dispatch } = useRadioGroupContext();
  const { name, onChange, value, isDisabled } = state;

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event);
      dispatch({ type: 'SET_VALUE', payload: event.target.value });
    },
    [onChange, dispatch],
  );

  return { name, handleChange, value, isDisabled };
}

export default useRadioGroup;
