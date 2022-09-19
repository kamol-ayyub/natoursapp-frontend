import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from '../App';
import { Login, Signup, NotFound, Account, Home, Tour } from '../pages/';
import { UserIsLoggedContext } from '../../context/Context';

export const AppRouter = () => {
  const { logged } = useContext(UserIsLoggedContext);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/tour/:tour' element={<Tour />} />
          {logged && <Route path='/me' element={<Account />} />}
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
};
