import React, { FC } from 'react';
import styled from 'styled-components';
import { ChildProp, HeadingType } from '@/types/types';
import { Span } from '@/components';
const HeadingtertiraryBase = styled.h3<HeadingType>`
  margin-bottom: ${(props) => (props.MaBtLg ? '35px' : '0px')};
  color: #fff;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 2.75rem;
  text-align: right;
  position: absolute;
  bottom: 1rem;
  right: 2rem;
  width: 70%;
  z-index: 10;

  span {
    padding: 1rem 1.5rem;
    line-height: 1;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
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

export const HeadingTertirary: FC<ChildProp> = ({ children, MaBtLg }) => {
  return (
    <HeadingtertiraryBase MaBtLg={MaBtLg}>
      <Span>{children}</Span>
    </HeadingtertiraryBase>
  );
};
