import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { Account } from '../../app/pages';
import { ProtectedType } from '../../types/types';

export const Protected: FC<ProtectedType> = ({ isLogged }) => {
  if (!isLogged) {
    return <Navigate to={'*'} replace />;
  }
  return <Account />;
};
