import { FC } from 'react';
import { ChildProp } from '../../types/types';
import styled from 'styled-components';
const FooterWrapBase = styled.footer`
  background-color: #f7f7f7;
  padding: 6rem 4rem 3rem 4rem;
  font-size: 1.4rem;
  display: grid;
  grid-template-columns: auto auto;
  grid-row-gap: 0.75rem;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  @media only screen and (max-width: 50em) {
    grid-template-columns: 1fr;
    grid-row-gap: 1.25rem;
    justify-items: center;
  }
`;

export const FooterWrapper: FC<ChildProp> = ({ children }) => {
  return <FooterWrapBase>{children} </FooterWrapBase>;
};
