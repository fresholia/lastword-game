import React from 'react';
import classNames from 'classnames';
import ListItem from './item/ListItem';

import { ListProps } from './List.types';

import './list.scss';

export const DEFAULT_LIST_ELEMENT: React.ElementType = 'ul';

function List<E extends React.ElementType = typeof DEFAULT_LIST_ELEMENT>({
  children,
  className,
  as: WrapperElement,
  ...props
}: ListProps<E>) {
  const Component = WrapperElement || DEFAULT_LIST_ELEMENT;
  return (
    <Component className={classNames('list', className)} {...props}>
      {children}
    </Component>
  );
}

List.Item = ListItem;

export default List;
