import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const UserViewWrap = styled.main`
  background-color: #fff;
  max-width: 120rem;
  margin: 0 auto;
  min-height: 100vh;
  border-radius: 3px;
  overflow: hidden;
  -webkit-box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.07);
  box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.07);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
`;
interface UserViewType {
  children: ReactNode;
}
export const UserView: FC<UserViewType> = ({ children }) => {
  return <UserViewWrap>{children}</UserViewWrap>;
};
