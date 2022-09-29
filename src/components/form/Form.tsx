import { FC } from 'react';
import { ChildPropWithRef } from '@/types/types';
import styled from 'styled-components';
const FormBase = styled.form<ChildPropWithRef>``;

export const Form: FC<ChildPropWithRef> = ({
  children,
  formRef,

  submitForm,
}) => {
  return (
    <FormBase onSubmit={submitForm} ref={formRef}>
      {children}
    </FormBase>
  );
};
