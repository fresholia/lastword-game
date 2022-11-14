import React from 'react';
import classNames from 'classnames';
import { ButtonProps } from './Button.types';

import './button.scss';

function Button({
  buttonType = 'primary',
  size = 'medium',
  typography = 'body',
  type = 'button',
  children,
  disabled,
  className,
  onClick,
  ...props
}: ButtonProps) {
  const buttonClassName = classNames(
    'button',
    `button--${buttonType}`,
    `button--${size}`,
    `typography--${typography}`,
    'is-centered',
    {
      'button--disabled': disabled,
    },
    className,
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      event.preventDefault();
      return;
    }

    onClick?.(event);
  };

  return (
    <button className={buttonClassName} type={type} onClick={handleClick} {...props}>
      {children}
    </button>
  );
}

export default Button;
