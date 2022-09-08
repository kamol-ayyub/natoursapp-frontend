import { FC } from 'react';
import { OverviewBox } from '../overview-box/OverviewBox';
import { TourDescription } from '../tour-description/TourDescription';

type OverViewProps = any;

export const Overview: FC<OverViewProps> = ({ data }) => {
  return (
    <section className='section-description'>
      <OverviewBox data={data} />
      <TourDescription tourName={data?.name} description={data?.description} />
    </section>
  );
};

export default Overview;
