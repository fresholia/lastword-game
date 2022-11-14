import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AppContextProvider } from './context/AppContext';

import RouteLoading from './routes/loading/RouteLoading';

import ROUTES from './routes/routes';

import './app.scss';
import ProtectedRoute from './routes/protected-route/ProtectedRoute';
import { ProtectedRouteProps } from './routes/protected-route/ProtectedRoute.types';

const GamePage = lazy(() => import('game/page/GamePage'));
const LoginPage = lazy(() => import('home/page/LoginPage'));
const ResultPage = lazy(() => import('result/page/ResultPage'));

const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
  authenticationPath: '/',
};

function App() {
  return (
    <Suspense fallback={<RouteLoading />}>
      <Router>
        <AppContextProvider>
          <Routes>
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route
              path={ROUTES.GAME}
              element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<GamePage />} />}
            />
            <Route
              path={ROUTES.RESULT}
              element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<ResultPage />} />}
            />
          </Routes>
        </AppContextProvider>
      </Router>
    </Suspense>
  );
}

export default App;
