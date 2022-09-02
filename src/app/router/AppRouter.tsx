import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from '../App';
import { Login } from '../pages/login/Login';
import Overview from '../pages/overview/Overview';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/overview' element={<Overview />} />
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
};
