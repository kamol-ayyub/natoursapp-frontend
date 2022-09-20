import { FC } from 'react';
import { Link } from 'react-router-dom';

interface NavItemType {
  link: HTMLAnchorElement | String;
  text: String;
  active?: boolean;
  svg: any;
}

export const NavItem: FC<NavItemType> = ({ link, text, svg, active }) => {
  return (
    <li className={active ? 'side-nav--active' : ''}>
      <Link to={`${link}`}>
        {svg}
        <p>{text}</p>
      </Link>
    </li>
  );
};
