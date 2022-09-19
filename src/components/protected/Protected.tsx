import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { Account } from '../../app/pages';

interface ProtectedType {
  isLogged?: boolean;
}

export const Protected: FC<ProtectedType> = ({ isLogged }) => {
  console.log(isLogged, 'islogged protected');
  if (!isLogged) {
    return <Navigate to={'*'} replace />;
  }
  return <Account />;
};
