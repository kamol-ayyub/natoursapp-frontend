import { FC } from 'react';
import { ChildPropWithRef } from '../../types/types';

export const Form: FC<ChildPropWithRef> = ({
  children,
  formRef,
  className,
  submitForm,
}) => {
  return (
    <form onSubmit={submitForm} ref={formRef} className={className}>
      {children}
    </form>
  );
};
