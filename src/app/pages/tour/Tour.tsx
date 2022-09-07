import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { Cta } from '../../../components/cta/Cta';
import { TourHeader } from '../../../components/tour-header/TourHeader';
import Overview from '../../../components/overview/Overview';
import { Review } from '../../../components/review/Review';

const Tour: FC = () => {
  const { tour } = useParams();
  console.log(tour);
  return (
    <div>
      <TourHeader />
      <Overview />
      <Review />
      <Cta />
    </div>
  );
};

export default Tour;
