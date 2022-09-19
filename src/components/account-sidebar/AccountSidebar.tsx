import { NavItem } from '../nav-item/NavItem';
import { RiSettings3Line, RiWallet3Line } from 'react-icons/ri';
import { AiOutlineStar } from 'react-icons/ai';
import { BiWallet } from 'react-icons/bi';
import styled from 'styled-components';

/// Elements
const UserNavItem = styled.nav`
  -webkit-box-flex: 32rem;
  -ms-flex: 32rem 0 0px;
  flex: 32rem 0 0;
  background-image: -webkit-gradient(
    linear,
    left top,
    right bottom,
    from(#7dd56f),
    to(#28b487)
  );
  background-image: linear-gradient(to right bottom, #7dd56f, #28b487);
  padding: 4rem 0;
`;

const SideNav = styled.ul`
  list-style: none;
`;
export const AccountSidebar = () => {
  return (
    <UserNavItem>
      <SideNav>
        <NavItem
          link={'/me'}
          text={'Settings'}
          svg={<RiSettings3Line />}
          active={true}
        />
        <NavItem
          link={'/my-tours'}
          text={'My bookings'}
          svg={<RiWallet3Line />}
        />
        <NavItem link={'/me'} text={'My reviews'} svg={<AiOutlineStar />} />
        <NavItem link={'/me'} text={'Billing'} svg={<BiWallet />} />
      </SideNav>
    </UserNavItem>
  );
};
