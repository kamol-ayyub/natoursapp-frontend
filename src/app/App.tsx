import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import { UserIsLoggedContext } from '../context/Context';
import { logged, setLogged } from '../context/Context';
export const App: FC = () => {
  const [logged, setLogged] = useState(false);

  return (
    <UserIsLoggedContext.Provider value={{ logged, setLogged }}>
      <Header />
      <Outlet />
      <Footer />
    </UserIsLoggedContext.Provider>
  );
};
