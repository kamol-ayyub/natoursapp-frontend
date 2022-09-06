import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from '../App';
import { Login } from '../pages/login/Login';
import Tour from '../pages/tour/Tour';
import Signup from '../pages/signup/Signup';
import NotFound from '../pages/notFound/NotFound';
import Account from '../pages/account/Account';
import { Home } from '../pages/home/Home';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/tour/:tour' element={<Tour />} />
          <Route path='/me' element={<Account />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
};
