import { FC } from 'react';
import { OverviewBox } from '../overview-box/OverviewBox';
import { TourDescription } from '../tour-description/TourDescription';

type OverViewProps = any;

export const Overview: FC<OverViewProps> = ({
  data,
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
        data={data}
        maxGroupSize={maxGroupSize}
        ratingsAverage={ratingsAverage}
        guides={guides}
      />
      <TourDescription tourName={name} description={description} />
    </section>
  );
};

export default Overview;
