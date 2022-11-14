import React from 'react';
import classNames from 'classnames';
import { TypographyProps } from './Typography.types';

export const DEFAULT_TYPOGRAPHY_ELEMENT: React.ElementType = 'div';

function Typography<E extends React.ElementType = typeof DEFAULT_TYPOGRAPHY_ELEMENT>({
  variant = 'body',
  textColor = 'main-text',
  textWeight = 'regular',
  children,
  className,
  as: WrapperElement,
  ...props
}: TypographyProps<E>) {
  const Component = WrapperElement || DEFAULT_TYPOGRAPHY_ELEMENT;

  return (
    <Component
      className={classNames(
        'typography',
        `typography--${variant}`,
        `typography--${textWeight}`,
        `has-${textColor}-color`,
        className,
      )}
      {...props}>
      {children}
    </Component>
  );
}

export default Typography;
