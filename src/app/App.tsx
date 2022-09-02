import { FC } from 'react';
import Header from '../components/header/Header';

import { Outlet } from 'react-router-dom';

export const App: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
