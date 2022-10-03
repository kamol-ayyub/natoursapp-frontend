import { FC } from 'react';
import styled from 'styled-components';
const FooterCopyBase = styled.p`
  justify-self: end;
  color: var(--gray);
  @media only screen and (max-width: 50em) {
    justify-self: center;
  }
`;

export const FooterCopyright: FC = () => {
  return <FooterCopyBase>&copy; by Ayyubxon Kamoldinov.</FooterCopyBase>;
};
