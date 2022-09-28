import { FC } from 'react';
import styled from 'styled-components';
import { ChildProp } from '../../types/types';
const CardContainerBase = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 7rem;
`;

export const CardContainer: FC<ChildProp> = ({ children }) => {
  return <CardContainerBase> {children} </CardContainerBase>;
};
