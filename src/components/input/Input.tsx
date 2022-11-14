import classNames from 'classnames';
import { InputProps } from './Input.types';

import './input.scss';

function Input({
  textAlign = 'left',
  inputType = 'primary',
  inputSize = 'medium',
  ...props
}: InputProps) {
  return (
    <input
      className={classNames(
        'input',
        `input--${inputType}`,
        `input--${inputSize}`,
        `is-aligned-${textAlign}`,
      )}
      {...props}
    />
  );
}

export default Input;
