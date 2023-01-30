import { FC } from 'react';
import styled, { css } from 'styled-components';
import { NavBaseProps } from '../../types/types';
const NavBase = styled.nav<NavBaseProps>`
  ${(props) =>
    props.Tour &&
    css`
      -webkit-box-flex: 0;
      -ms-flex: 0 1 40%;
      flex: 0 1 40%;
      @media only screen and (max-width: 62.5em) {
         {
          margin-bottom: 1.5rem;
        }
      }
      @media only screen and (max-width: 37.5em) {
         {
          margin-bottom: 0;
        }
      }
    `}
  ${(props) =>
    props.User &&
    css`
      -webkit-box-flex: 0;
      -ms-flex: 0 1 40%;
      flex: 0 1 40%;
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
    `}
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  @media only screen and (max-width: 37.5em) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
`;
export const Nav: FC<NavBaseProps> = ({ children, Tour, User }) => {
  return (
    <NavBase Tour={Tour} User={User}>
      {children}
    </NavBase>
  );
};
