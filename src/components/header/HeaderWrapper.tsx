import { FC } from 'react';
import styled from 'styled-components';
import { ChildProp } from '../../types/types';
const HeaderBase = styled.header`
  background-color: #444;
  padding: 0 5rem;
  height: 8rem;
  position: relative;
  z-index: 100;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  @media only screen and (max-width: 62.5em) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
`;
export const HeaderWrapper: FC<ChildProp> = ({ children }) => {
  return <HeaderBase>{children}</HeaderBase>;
};
