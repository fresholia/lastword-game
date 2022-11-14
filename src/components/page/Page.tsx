import { useEffect } from 'react';
import classNames from 'classnames';

import PageHeader from './header/PageHeader';
import PageContent from './content/PageContent';
import { PageProps } from './Page.types';

import './page.scss';

function Page({ pageTitle = 'atölye15', children, className, ...props }: PageProps) {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <div className={classNames('page', className)} {...props}>
      <PageHeader />
      {children}
    </div>
  );
}

Page.Content = PageContent;

export default Page;
