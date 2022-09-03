import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import Logowhite from '../../../img/logo-white.png';
import ProfilePhoto from '../../../img/users/default.jpg';
import '../../../css/style.css';

const Header: FC = () => {
  const [user, setUser] = useState<boolean>(false);
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
        {user ? (
          <>
            <Link className='nav__el nav__el--logout' to={`/logout`}>
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

export default Header;
