import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import Logowhite from '../../img/logo-white.png';
import ProfilePhoto from '../../img/users/default.jpg';
import { UserIsLoggedContext } from '../../context/Context';
import '../../css/style.css';

export const Header: FC = () => {
  const { logged, setLogged } = useContext(UserIsLoggedContext);
  const handleLogOut = () => {
    setLogged(false);
    localStorage.clear();
  };
  return (
    <header className='header'>
      <nav className='nav nav--tours'>
        <Link className='nav__el' to={`/`}>
          All tours
        </Link>
      </nav>
      <div className='header__logo'>
        <img src={Logowhite} alt='header brand logo' />
      </div>
      <nav className='nav nav--user'>
        {logged ? (
          <>
            <Link to={`/`} className='nav__el'>
              My bookings
            </Link>
            <Link
              onClick={handleLogOut}
              className='nav__el nav__el--logout'
              to={`/`}
            >
              Logout
            </Link>
            <Link className='nav__el ' to={`/me`}>
              <img
                className='nav__user-img'
                src={ProfilePhoto}
                alt='user profile'
              />
              <span>Ayyubxon</span>
            </Link>
          </>
        ) : (
          <>
            <Link className='nav__el' to='/login'>
              Log in
            </Link>
            <Link className='nav__el nav__el--cta' to='/signup'>
              Sign up
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};
