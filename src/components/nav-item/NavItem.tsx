import React from 'react';
import { Link } from 'react-router-dom';
// import bla from '../../img'

interface NavItemType {
  link: HTMLAnchorElement | String;
  text: String;

  active?: boolean;
  svg: any;
}

export const NavItem = ({ link, text, svg, active }: NavItemType) => {
  return (
    <li className={active ? 'side-nav--active' : ''}>
      <Link to={`${link}`}>
        {svg}
        <p>{text}</p>
      </Link>
    </li>
  );
};
