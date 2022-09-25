import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import ProfilePhoto from '../../img/users/default.jpg';
import { UserIsLoggedContext } from '../../context/Context';
import '../../css/style.css';
import { Image } from '../img-component/Image';
import { RouteLink } from '../';

export const Header: FC = () => {
  const { logged, setLogged } = useContext(UserIsLoggedContext);
  const handleLogOut = () => {
    setLogged(false);
    localStorage.clear();
  };
  return (
    <header className='header'>
      <nav className='nav nav--tours'>
        <RouteLink NavEl to={`/`}>
          All tours
        </RouteLink>
      </nav>
      <div className='header__logo'>
        <Image src={'../../img/logo-white.png'} alt='header brand logo' />
      </div>
      <nav className='nav nav--user'>
        {logged ? (
          <>
            <RouteLink NavEl onClick={handleLogOut} to={`/`}>
              Logout
            </RouteLink>
            <RouteLink NavEl to={`/me`}>
              <Image NavUserImg src={ProfilePhoto} alt='user profile' />
              <span>Ayyubxon</span>
            </RouteLink>
          </>
        ) : (
          <>
            <RouteLink NavEl to='/login'>
              Log in
            </RouteLink>
            <RouteLink NavEl NavElCta to='/signup'>
              Sign up
            </RouteLink>
          </>
        )}
      </nav>
    </header>
  );
};
