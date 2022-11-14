import classNames from 'classnames';
import { PageContentProps } from './PageContent.types';

import './page-content.scss';

function PageContent({ children, className, ...props }: PageContentProps) {
  return (
    <main className={classNames('page-content', 'is-centered', className)} {...props}>
      {children}
    </main>
  );
}

export default PageContent;
