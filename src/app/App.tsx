import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components';

export const App: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
