import { FC } from 'react';
import styled from 'styled-components';
import { ChildProp } from '@/types/types';
const ErrorBase = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  max-width: 80rem;
  text-align: center;
`;

const ErrorTitleBase = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const Error: FC<ChildProp> = ({ children }) => {
  return (
    <ErrorBase>
      <ErrorTitleBase>{children}</ErrorTitleBase>
    </ErrorBase>
  );
};
