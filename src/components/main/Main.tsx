import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
const MainWrapper = styled.main`
  background-color: #f7f7f7;
  padding: 8rem 6rem;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  position: relative;
`;

interface MainType {
  children: ReactNode;
}

export const Main: FC<MainType> = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>;
};
