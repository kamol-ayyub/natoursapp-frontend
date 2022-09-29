import { FC } from 'react';
import styled from 'styled-components';
import { ChildProp } from '@/types/types';
const MainWrapper = styled.main`
  background-color: #f7f7f7;
  padding: 8rem 6rem;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  position: relative;
`;

export const Main: FC<ChildProp> = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>;
};
