import { initialRadioGroupState } from './RadioGroupContext.constants';
import { RadioGroupContextReducerAction } from './RadioGroupContext.types';

export function radioGroupContextReducer(
  state: typeof initialRadioGroupState,
  action: RadioGroupContextReducerAction,
) {
  let newState = state;

  switch (action.type) {
    case 'SET_NAME':
      newState = {
        ...state,
        name: action.payload,
      };
      break;
    case 'SET_VALUE':
      newState = {
        ...state,
        value: action.payload,
      };
      break;
    default:
      break;
  }

  return newState;
}
