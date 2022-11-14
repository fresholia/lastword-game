import React from 'react';

type RadioGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  defaultValue?: string;
  isDisabled?: boolean;
  name: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type { RadioGroupProps };
