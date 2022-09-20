import { FC, ReactNode } from 'react';
import styled from 'styled-components';
const UserViewContainer = styled.div`
  max-width: 68rem;
  margin: 0 auto;
  padding: 0 8rem;
`;
interface UserViewContainerType {
  children?: ReactNode;
}

export const UserViewFormContainer: FC<UserViewContainerType> = ({
  children,
}) => {
  return <UserViewContainer>{children}</UserViewContainer>;
};
