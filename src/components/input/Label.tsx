import { FC } from 'react';
import styled from 'styled-components';
import { ChildProp } from '../../types/types';
const LabelBase = styled.label`
  display: block;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`;

export const Label: FC<ChildProp> = ({ children }) => {
  return <LabelBase>{children}</LabelBase>;
};
