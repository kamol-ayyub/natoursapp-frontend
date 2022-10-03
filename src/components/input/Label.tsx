import { FC } from 'react';
import styled, { css } from 'styled-components';
import { LabelProp } from '@/types/types';
const LabelBase = styled.label<LabelProp>`
  ${(props) =>
    props.Upload
      ? css`
          color: var(--greenColor-55);
          display: inline-block;
          text-decoration: none;
          border-bottom: 1px solid var(--greenColor-55);
          padding: 3px;
          -webkit-transition: all 0.2s;
          transition: all 0.2s;
          cursor: pointer;
          :hover {
            background-color: var(--greenColor-55);
            color: var(--whiteColor);
            -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
            box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
            -webkit-transform: translateY(-2px);
            transform: translateY(-2px);
          }
        `
      : css`
          display: block;
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        `}
`;

export const Label: FC<LabelProp> = ({ children, HTMLFor, Upload }) => {
  return (
    <LabelBase Upload={Upload} htmlFor={HTMLFor}>
      {children}
    </LabelBase>
  );
};
