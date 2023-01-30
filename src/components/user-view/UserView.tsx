import { FC } from 'react';
import styled from 'styled-components';
import { UserViewType } from '../../types/types';
const UserViewWrap = styled.main`
  background-color: var(--whiteColor);
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

export const UserView: FC<UserViewType> = ({ children }) => {
  return <UserViewWrap>{children}</UserViewWrap>;
};
