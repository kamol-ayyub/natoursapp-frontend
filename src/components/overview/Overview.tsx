import { FC } from 'react';
import { OverviewBox } from '../overview-box/OverviewBox';
import { TourDescription } from '../tour-description/TourDescription';
import { OverviewProps } from '../../types/types';

export const Overview: FC<OverviewProps> = ({
  name,
  description,
  startDates,
  difficulty,
  maxGroupSize,
  ratingsAverage,
  guides,
}) => {
  return (
    <section className='section-description'>
      <OverviewBox
        difficulty={difficulty}
        startDates={startDates}
        maxGroupSize={maxGroupSize}
        ratingsAverage={ratingsAverage}
        guides={guides}
      />
      <TourDescription tourName={name} description={description} />
    </section>
  );
};

export default Overview;
