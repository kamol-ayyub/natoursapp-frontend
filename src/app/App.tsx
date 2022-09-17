import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components';
import { UserIsLoggedContext } from '../context/Context';
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
