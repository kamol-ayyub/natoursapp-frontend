import React from 'react';
import { NavItem } from './components/nav-item/NavItem';
import { RiSettings3Line } from 'react-icons/ri';
import { RiWallet3Line } from 'react-icons/ri';
import { AiOutlineStar } from 'react-icons/ai';
import { BiWallet } from 'react-icons/bi';

export const AccountSidebar = () => {
  return (
    <div className='user-view'>
      <nav className='user-view__menu'>
        <ul className='side-nav'>
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
        </ul>
      </nav>
    </div>
  );
};
