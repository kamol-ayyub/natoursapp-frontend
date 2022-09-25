import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface LinkBaseType {
  to?: string;
  children?: ReactNode;
  NavEl?: boolean;
  onClick?: () => void;
  NavElCta?: boolean;
}
const LinkBase = styled(Link)<LinkBaseType>`
  ${(props) =>
    props.NavEl &&
    css`
      color: #f7f7f7;
      text-transform: uppercase;
      font-size: 1.6rem;
      text-decoration: none;
      display: -webkit-inline-box;
      display: -ms-inline-flexbox;
      display: inline-flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
      font-weight: 400;
      background: none;
      border: none;
      cursor: pointer;
      font-family: inherit;
      :hover,
      :active {
        -webkit-transform: translateY(-2px);
        transform: translateY(-2px);
        text-shadow: 0 0.7rem 1rem black;
      }
      :not(:last-child) {
        margin-right: 3rem;
      }
      :focus {
        outline: none;
      }
      @media only screen and (max-width: 37.5em) {
        :not(:last-child) {
          margin-right: 0;
          margin-bottom: 1.2rem;
        }
      }
    `}
  ${(props) =>
    props.NavElCta &&
    css`
      padding: 1rem 3rem;
      border-radius: 10rem;
      border: 1px solid currentColor !important;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
      :hover {
        background-color: #f7f7f7;
        color: #777;
        text-shadow: none;
        border-color: #f7f7f7;
      }
    `}
`;

export const RouteLink: FC<LinkBaseType> = ({
  onClick,
  children,
  NavEl,
  NavElCta,
}) => {
  return (
    <LinkBase onClick={onClick} NavElCta={NavElCta} NavEl={NavEl} to={'/'}>
      {children}
    </LinkBase>
  );
};
