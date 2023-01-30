import { FC } from 'react';
import styled from 'styled-components';
import { FormGroupWrap } from '../../components/form';
import { ChildProp } from '../../types/types';

const FormUploadBase = styled(FormGroupWrap)`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 1.6rem;
`;

export const FormUploadPhoto: FC<ChildProp> = ({ children }) => {
  return <FormUploadBase>{children}</FormUploadBase>;
};
