import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
interface NavItemBaseType {
  Active?: boolean;
}
const NavItemBase = styled.li<NavItemBaseType>`
  ${(props) =>
    props.Active &&
    css`
      border-left: 4px solid #fff !important;
    `}
`;

const NavItemLink = styled(Link)`
  :hover {
    /* border-left: 4px solid #fff !important; */
  }
`;
interface NavItemType {
  link?: HTMLAnchorElement | String;
  text?: String;
  active?: boolean;
  svg?: any;
  Active?: boolean;
}

export const NavItem: FC<NavItemType> = ({ link, text, svg, Active }) => {
  return (
    <NavItemBase Active={Active}>
      <NavItemLink to={`${link}`}>
        {svg}
        <p>{text}</p>
      </NavItemLink>
    </NavItemBase>
  );
};
