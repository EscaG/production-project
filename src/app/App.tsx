import { Suspense } from 'react';
import { AppRouter } from 'app/providers/router';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import './styles/index.scss';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
