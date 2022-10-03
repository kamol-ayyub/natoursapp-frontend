import { FC } from 'react';
import styled, { css } from 'styled-components';
import { HeadingType } from '@/types/types';

const HeadSecondary = styled('h2')<HeadingType>`
  margin-bottom: ${(props) => (props.MaBtLg ? '35px' : '0px')};
  font-size: 2.25rem;
  text-transform: uppercase;
  font-weight: 700;

  background-image: linear-gradient(
    to right,
    var(--headingLightGreen),
    var(--darkGreen)
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: 0.1rem;
  line-height: 1.3;
  display: inline-block;
  ${(props) =>
    props.error &&
    css`
      background-image: -webkit-gradient(
        linear,
        left top,
        right top,
        from(var(--darkOrange)),
        to(var(--headingAlertColor))
      );
      background-image: linear-gradient(
        to right,
        var(--darkOrange),
        var(--headingAlertColor)
      );
      font-size: 3.5rem;
    `}
`;

export const HeadingSecondary: FC<HeadingType> = ({
  children,
  MaBtLg,
  error,
}) => {
  return (
    <HeadSecondary error={error} MaBtLg={MaBtLg}>
      {children}
    </HeadSecondary>
  );
};
