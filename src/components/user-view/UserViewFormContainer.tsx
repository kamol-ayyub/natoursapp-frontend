import { FC } from 'react';
import styled from 'styled-components';
import { ChildProp } from '@/types/types';
const UserViewContainer = styled.div`
  max-width: 68rem;
  margin: 0 auto;
  padding: 0 8rem;
`;

export const UserViewFormContainer: FC<ChildProp> = ({ children }) => {
  return <UserViewContainer>{children}</UserViewContainer>;
};
