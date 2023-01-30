import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from '../App';
import {
  Login,
  Signup,
  NotFound,
  Home,
  Tour,
  Account,
  ForgotPassword,
  ResetPass,
} from '../../app/pages';
import { UserIsLoggedContext } from '../../context/Context';
import { Protected } from '../../components';

export const AppRouter = () => {
  const [logged, setLogged] = useState(false);

  return (
    <UserIsLoggedContext.Provider value={{ logged, setLogged }}>
      <Router>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/forgot-pass' element={<ForgotPassword />} />
            <Route path='/reset-pass/:token' element={<ResetPass />} />
            <Route path='/tour/:tour' element={<Tour />} />
            <Route
              path='/me'
              element={
                <Protected isLogged={logged}>
                  <Account />
                </Protected>
              }
            />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </UserIsLoggedContext.Provider>
  );
};
