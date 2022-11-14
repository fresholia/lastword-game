import React from 'react';
import { ListItemProps } from './ListItem.types';

import './list-item.scss';

export const DEFAULT_LIST_ITEM_ELEMENT: React.ElementType = 'li';

function ListItem<E extends React.ElementType = typeof DEFAULT_LIST_ITEM_ELEMENT>({
  children,
  as: WrapperElement,
  ...props
}: ListItemProps<E>) {
  const Component = WrapperElement || DEFAULT_LIST_ITEM_ELEMENT;
  return <Component {...props}>{children}</Component>;
}

export default ListItem;
