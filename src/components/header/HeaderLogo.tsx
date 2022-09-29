import { FC } from 'react';
import { ChildProp } from '@/types/types';
import styled from 'styled-components';
const HeaderLogoBase = styled.div<ChildProp>`
  @media only screen and (max-width: 62.5em) {
    -webkit-box-ordinal-group: 0;
    -ms-flex-order: -1;
    order: -1;
    margin-bottom: 1.5rem;
  }
  img {
    height: 3.5rem;
  }
`;

export const HeaderLogo: FC<ChildProp> = ({ children }) => {
  return <HeaderLogoBase>{children}</HeaderLogoBase>;
};
