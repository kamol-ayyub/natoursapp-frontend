import { FC } from 'react';
import Header from '../components/header/header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';

export const App: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
