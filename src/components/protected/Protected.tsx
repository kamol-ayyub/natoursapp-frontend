import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { ProtectedType } from '../../types/types';

export const Protected: FC<ProtectedType> = ({ isLogged, children }) => {
  if (!isLogged) {
    return <Navigate to={'*'} replace />;
  }
  return <>{children}</>;
};
