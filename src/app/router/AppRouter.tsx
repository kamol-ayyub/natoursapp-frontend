import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from '../App';
import { Login, Signup, NotFound, Account, Home, Tour } from '../pages/';

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
