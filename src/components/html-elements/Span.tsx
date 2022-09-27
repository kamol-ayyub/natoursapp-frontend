import { FC } from 'react';
import styled, { css } from 'styled-components';
import { SpanProps } from '../../types/types';
const SpanBase = styled.span<SpanProps>`
  ${(props) =>
    props.OverviewBoxLabel &&
    css`
      font-weight: 700;
      margin-right: 2.25rem;
      text-transform: uppercase;
      font-size: 1.4rem;
    `}
  ${(props) =>
    props.OverviewBoxText &&
    css`
      text-transform: capitalize;
    `}
`;

export const Span: FC<SpanProps> = ({
  children,
  OverviewBoxLabel,
  OverviewBoxText,
}) => {
  return (
    <SpanBase
      OverviewBoxText={OverviewBoxText}
      OverviewBoxLabel={OverviewBoxLabel}
    >
      {children}
    </SpanBase>
  );
};
