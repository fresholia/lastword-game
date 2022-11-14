import React from 'react';

type CircleProgressProps = React.HTMLAttributes<HTMLDivElement> & {
  percentage: number;
  size?: number;
  strokeWidth?: number;
};

export type { CircleProgressProps };
