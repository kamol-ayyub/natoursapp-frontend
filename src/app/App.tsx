import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '@/components';
import GlobalStyle from '@/GlobalStyle';

export const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
