import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from '../App';
import { Login } from '../pages/login/Login';
import Overview from '../../components/overview/Overview';
import Tour from '../pages/tour/Tour';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Overview />} />
          <Route path='/login' element={<Login />} />
          <Route path='/tour/:element' element={<Tour />} />
        </Route>
      </Routes>
    </Router>
  );
};
