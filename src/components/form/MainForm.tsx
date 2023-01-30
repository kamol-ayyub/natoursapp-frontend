import { FC } from 'react';
import styled from 'styled-components';
import { ChildProp } from '../../types/types';
const LoginFormBase = styled.div`
  margin: 0 auto;
  max-width: 55rem;
  background-color: var(--whiteColor);
  -webkit-box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.06);
  box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.06);
  padding: 5rem 7rem;
  border-radius: 5px;
`;
export const LoginForm: FC<ChildProp> = ({ children }) => {
  return <LoginFormBase>{children}</LoginFormBase>;
};
