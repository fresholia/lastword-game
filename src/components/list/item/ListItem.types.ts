import React from 'react';

type ListItemOwnProps<E extends React.ElementType = React.ElementType> = {
  children: React.ReactNode;
  as?: E;
};

type ListItemProps<E extends React.ElementType> = ListItemOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof ListItemOwnProps<E>>;

export type { ListItemProps };
