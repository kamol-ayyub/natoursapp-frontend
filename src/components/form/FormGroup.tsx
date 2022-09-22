import { FC } from 'react';
import styled from 'styled-components';
import { ChildProp } from '../../types/types';
const FormGroupWrap = styled.div`
  :not(:last-child) {
    margin-bottom: 2.5rem;
  }
`;

export const FormGroup: FC<ChildProp> = ({ children }) => {
  return <FormGroupWrap>{children}</FormGroupWrap>;
};
