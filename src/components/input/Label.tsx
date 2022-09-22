import { FC } from 'react';
import styled from 'styled-components';
import { LabelProp } from '../../types/types';
const LabelBase = styled.label<LabelProp>`
  display: block;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`;

export const Label: FC<LabelProp> = ({ children, HTMLFor }) => {
  return <LabelBase htmlFor={HTMLFor}>{children}</LabelBase>;
};
