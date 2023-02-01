import { FC, memo } from 'react';
import { OverviewBox, TourDescription } from '../../components';
import { OverviewProps } from '../../types/types';
import styled from 'styled-components';
const SectionDescription = styled.section`
  background-color: white;
  margin-top: calc(0px - var(--section-rotate));
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  > * {
    padding: 0 8vw;
    padding-top: 14vw;
    padding-bottom: calc(1vw + var(--section-rotate));
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
  }
`;

export const Overview: FC<OverviewProps> = ({
  name,
  description,
  startDates,
  difficulty,
  maxGroupSize,
  ratingsAverage,
  guides,
}) => {
  console.log(guides, 'guides in overview comp');
  return (
    <SectionDescription>
      <OverviewBox
        difficulty={difficulty}
        startDates={startDates}
        maxGroupSize={maxGroupSize}
        ratingsAverage={ratingsAverage}
        guides={guides}
      />
      <TourDescription tourName={name} description={description} />
    </SectionDescription>
  );
};

export default memo(Overview);
