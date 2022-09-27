import { FC } from 'react';
import { ChildProp } from '../../types/types';
import styled from 'styled-components';
const FooterLogoBase = styled.div`
  grid-row: 1 / 3;
  -ms-flex-item-align: center;
  align-self: center;
  @media only screen and (max-width: 50em) {
    grid-row: 1;
  }
  img {
    height: 3rem;
  }
`;

export const FooterLogo: FC<ChildProp> = ({ children }) => {
  return <FooterLogoBase>{children}</FooterLogoBase>;
};
