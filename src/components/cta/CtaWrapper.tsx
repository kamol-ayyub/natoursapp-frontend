import { FC } from 'react';
import styled from 'styled-components';
import { ChildProp } from '../../types/types';
const CtaSection = styled.section`
  margin-top: calc(0px - var(--section-rotate));
  padding: 3rem;
  padding-bottom: 11rem;
  padding-top: calc(15rem + var(--section-rotate));
  background-color: var(--mainColor-f7);
`;
const Cta = styled.div`
  position: relative;
  max-width: 105rem;
  margin: 0 auto;
  overflow: hidden;
  background-color: var(--whiteColor);
  padding: 9rem 5rem 9rem 21rem;
  border-radius: 2rem;
  -webkit-box-shadow: 0 3rem 8rem 0.5rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 3rem 8rem 0.5rem rgba(0, 0, 0, 0.15);
`;
export const CtaWrapper: FC<ChildProp> = ({ children }) => {
  return (
    <CtaSection>
      <Cta>{children}</Cta>
    </CtaSection>
  );
};
