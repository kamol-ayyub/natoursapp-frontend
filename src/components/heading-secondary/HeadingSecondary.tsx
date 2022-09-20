import { FC } from 'react';
import styled from 'styled-components';
import { ChildProp } from '../../types/types';
const HeadSecondary = styled.h2`
  font-size: 2.25rem;
  text-transform: uppercase;
  font-weight: 700;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#7dd56f),
    to(#28b487)
  );
  background-image: linear-gradient(to right, #7dd56f, #28b487);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: 0.1rem;
  line-height: 1.3;
  display: inline-block;
`;

export const HeadingSecondary: FC<ChildProp> = ({ children }) => {
  return <HeadSecondary>{children}</HeadSecondary>;
};
