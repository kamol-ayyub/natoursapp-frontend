import { FC } from 'react';
import { ChildPropWithRef } from '../../types/types';

export const Form: FC<ChildPropWithRef> = ({ children, ref, className }) => {
  return (
    <form ref={ref} className={className}>
      {children}
    </form>
  );
};
