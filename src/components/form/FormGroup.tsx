import { FC } from 'react';
import styled, { css } from 'styled-components';
import { FormGroupType } from '@/types/types';
export const FormGroupWrap = styled.div<FormGroupType>`
  ${(props) =>
    props.right &&
    css`
      text-align: right !important;
    `}
  :not(:last-child) {
    margin-bottom: 2.5rem;
  }
`;

export const FormGroup: FC<FormGroupType> = ({ children, right }) => {
  return <FormGroupWrap right={right}>{children}</FormGroupWrap>;
};
