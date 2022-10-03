import { NavItem } from '@/components';
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
    from(var(--headingLightGreen)),
    to(var(--darkGreen))
  );
  background-image: linear-gradient(
    to right bottom,
    var(--headingLightGreen),
    var(--darkGreen)
  );
  padding: 4rem 0;
`;

const SideNav = styled.ul`
  list-style: none;
  li {
    margin: 1rem 0;
    border-left: 0 solid var(--whiteColor);
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  li:hover {
    border-left: 4px solid var(--whiteColor) !important;
  }
  a:link,
  a:visited {
    padding: 1rem 4rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: var(--whiteColor);
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 400;
    text-decoration: none;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  a:hover,
  a:active {
    -webkit-transform: translateX(3px);
    transform: translateX(3px);
  }
  svg {
    height: 1.9rem;
    width: 1.9rem;
    fill: var(--mainColor-f7);
    margin-right: 2rem;
  }
`;
export const AccountSidebar = () => {
  return (
    <UserNavItem>
      <SideNav>
        <NavItem
          link={'/me'}
          text={'Settings'}
          svg={<RiSettings3Line />}
          Active
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
