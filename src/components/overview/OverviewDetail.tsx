import { IconContext } from 'react-icons';
import { OverviewDetailProps, OverviewBoxTextProps } from '../../types/types';
import styled, { css } from 'styled-components';
const OverviewBoxDetail = styled.div`
  font-size: 1.5rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-weight: 400;
  svg {
    margin-right: 1.25rem;
  }
  :not(:last-child) {
    margin-bottom: 2.25rem;
  }
`;

const OverviewBoxText = styled.span<OverviewBoxTextProps>`
  text-transform: capitalize;
  ${(props) =>
    props.label &&
    css`
      font-weight: 700;
      margin-right: 2.25rem;
      text-transform: uppercase;
      font-size: 1.4rem;
    `}
`;

export const OverviewDetail = ({
  title,
  svg,
  date,
  addition,
}: OverviewDetailProps) => {
  return (
    <OverviewBoxDetail>
      <IconContext.Provider
        value={{
          style: {
            height: '2.25rem',
            width: '2.25rem',
            fill: 'var(--greenColor-55)',
          },
        }}
      >
        {svg}
      </IconContext.Provider>
      <OverviewBoxText label>{title}</OverviewBoxText>
      <OverviewBoxText>
        {date} {addition}
      </OverviewBoxText>
    </OverviewBoxDetail>
  );
};
