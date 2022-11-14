import React from 'react';

type ListOwnProps<E extends React.ElementType = React.ElementType> = {
  children: React.ReactNode;
  as?: E;
};

type ListProps<E extends React.ElementType> = ListOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof ListOwnProps<E>>;

export type { ListProps };
