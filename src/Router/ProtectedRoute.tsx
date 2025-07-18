import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import type { JSX } from 'react';

type Role = 'guest' | 'user' | 'admin';

interface Props {
  children: JSX.Element;
  allowedRoles: Role[];
}

export const ProtectedRoute = ({ children, allowedRoles }: Props) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/access-denied" replace />;
  }

  return children;
};
