import { FC } from 'react';
import styled from 'styled-components';
interface CtaTextProp {
  duration: string;
}
const CtaTextBase = styled.p`
  font-size: 1.9rem;
  font-weight: 400;
`;

export const CtaText: FC<CtaTextProp> = ({ duration }) => {
  return (
    <CtaTextBase>
      {duration} days. 1 adventure. Infinite memories. Make it yours today!
    </CtaTextBase>
  );
};
