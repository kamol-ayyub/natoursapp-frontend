import { FC } from 'react';
import styled from 'styled-components';
import { ChildProp, SecondaryType } from '../../types/types';
import { Span } from '../index';

const HeadPrimary = styled('h2')<SecondaryType>`
  color: #fff;
  text-transform: uppercase;
  font-weight: 300;
  span {
    padding: 1rem 1.5rem;
    line-height: 1;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    font-size: 5rem;
    text-align: center;
    width: 70%;
    margin: 0 auto;
    background-image: -webkit-gradient(
      linear,
      left top,
      right bottom,
      from(rgba(125, 213, 111, 0.85)),
      to(rgba(40, 180, 135, 0.85))
    );
    background-image: linear-gradient(
      to bottom right,
      rgba(125, 213, 111, 0.85),
      rgba(40, 180, 135, 0.85)
    );
  }
`;

export const HeadingPrimary: FC<ChildProp> = ({ children }) => {
  return (
    <HeadPrimary>
      <Span>{children}</Span>
    </HeadPrimary>
  );
};
