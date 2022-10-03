import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { NavItemType, NavItemBaseType } from '@/types/types';
const NavItemBase = styled.li<NavItemBaseType>`
  ${(props) =>
    props.Active &&
    css`
      border-left: 4px solid var(--whiteColor) !important;
    `}
`;

const NavItemLink = styled(Link)`
  :hover {
    /* border-left: 4px solid var(--whiteColor) !important; */
  }
`;

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
