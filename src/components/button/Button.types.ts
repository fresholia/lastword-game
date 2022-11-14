import React from 'react';
import { AVAILABLE_TYPOGRAPHY } from '../typography/Typography.types';

type ButtonType = 'primary' | 'secondary' | 'tertiary';
type ButtonSize = 'small' | 'medium';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonType?: ButtonType;
  size?: ButtonSize;
  typography?: AVAILABLE_TYPOGRAPHY;
};

export type { ButtonProps };
