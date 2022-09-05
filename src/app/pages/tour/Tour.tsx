import { FC } from 'react';
import { ReviewCard } from '../../../components/review/ReviewCard';
import { Cta } from '../../../components/cta/Cta';
import { TourHeader } from '../../../components/tour-header/TourHeader';
import Overview from '../../../components/overview/Overview';
import { Review } from '../../../components/review/Review';

const Tour: FC = () => {
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
