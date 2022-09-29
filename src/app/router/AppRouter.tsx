import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from '../App';
import { Login, Signup, NotFound, Home, Tour } from '../pages/';
import { UserIsLoggedContext } from '@/context/Context';
import { Protected } from '@/components';

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
            <Route path='/tour/:tour' element={<Tour />} />
            <Route path='/me' element={<Protected isLogged={logged} />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </UserIsLoggedContext.Provider>
  );
};
