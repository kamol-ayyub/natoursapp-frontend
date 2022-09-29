import { FC, useContext } from 'react';
import ProfilePhoto from '../../img/users/default.jpg';
import { UserIsLoggedContext } from '../../context/Context';
import { Image, RouteLink, Nav, HeaderWrapper, HeaderLogo } from '../index';

export const Header: FC = () => {
  const { logged, setLogged } = useContext(UserIsLoggedContext);
  const handleLogOut = () => {
    setLogged(false);
    localStorage.clear();
  };
  return (
    <HeaderWrapper>
      <Nav Tour>
        <RouteLink navel to={`/`}>
          All tours
        </RouteLink>
      </Nav>
      <HeaderLogo>
        <Image src={'../../img/logo-white.png'} alt='header brand logo' />
      </HeaderLogo>
      <Nav User>
        {logged ? (
          <>
            <RouteLink navel={true} onClick={handleLogOut} to={`/`}>
              Logout
            </RouteLink>
            <RouteLink navel={true} to={`/me`}>
              <Image NavUserImg src={ProfilePhoto} alt='user profile' />
              <span>Ayyubxon</span>
            </RouteLink>
          </>
        ) : (
          <>
            <RouteLink navel={true} to={'/login'}>
              Log in
            </RouteLink>
            <RouteLink navel navelcta to='/signup'>
              Sign up
            </RouteLink>
          </>
        )}
      </Nav>
    </HeaderWrapper>
  );
};
