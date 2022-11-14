import { Navigate } from 'react-router-dom';
import useUsername from 'settings/hooks/useUsername';
import { ProtectedRouteProps } from './ProtectedRoute.types';

function ProtectedRoute({ authenticationPath, outlet }: ProtectedRouteProps) {
  const { username } = useUsername();
  if (!username) {
    return <Navigate to={authenticationPath} replace />;
  }

  return outlet;
}

export default ProtectedRoute;
