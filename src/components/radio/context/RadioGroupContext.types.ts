import React from 'react';
import { initialRadioGroupState } from './RadioGroupContext.constants';

export type RadioGroupContextReducerAction =
  | {
      type: 'SET_NAME';
      payload: string;
    }
  | {
      type: 'SET_VALUE';
      payload: string;
    };

export type RadioGroupContextProviderProps = {
  children: React.ReactNode;
  initialValue?: typeof initialRadioGroupState;
};
