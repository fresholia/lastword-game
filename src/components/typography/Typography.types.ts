import React from 'react';

type AVAILABLE_TYPOGRAPHY = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'caption' | 'body' | 'small';

type AVAILABLE_TEXT_COLORS = 'main-text' | 'secondary-text' | 'tertiary-text';

type AVAILABLE_TEXT_WEIGHTS = 'regular' | 'medium' | 'bold';

type TypographyOwnProps<E extends React.ElementType = React.ElementType> = {
  children: React.ReactNode;
  variant?: AVAILABLE_TYPOGRAPHY;
  textColor?: AVAILABLE_TEXT_COLORS;
  textWeight?: AVAILABLE_TEXT_WEIGHTS;
  as?: E;
};

type TypographyProps<E extends React.ElementType> = TypographyOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TypographyOwnProps<E>>;

export type { AVAILABLE_TYPOGRAPHY, AVAILABLE_TEXT_COLORS, TypographyProps };
