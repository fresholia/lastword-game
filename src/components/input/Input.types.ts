import React from 'react';

type InputType = 'primary' | 'secondary';
type InputTextAlignments = 'left' | 'center' | 'right';
type InputSize = 'small' | 'medium';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  textAlign?: InputTextAlignments;
  inputType?: InputType;
  inputSize?: InputSize;
};

export type { InputProps };
