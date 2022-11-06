import { FC } from 'react';
import styled from 'styled-components';
import { ChildProp } from '../../types/types';
const CtaContentBase = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr auto;
  grid-gap: 0.7rem;
  grid-auto-flow: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const CtaContent: FC<ChildProp> = ({ children }) => {
  return <CtaContentBase>{children}</CtaContentBase>;
};
