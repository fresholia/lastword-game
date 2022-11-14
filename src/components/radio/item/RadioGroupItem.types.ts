import React from 'react';

type RadioGroupItemProps = React.HTMLAttributes<HTMLLabelElement> & {
  value: string;
  children?: React.ReactNode;
};

export type { RadioGroupItemProps };
