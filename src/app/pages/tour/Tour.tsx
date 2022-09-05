import { FC } from 'react';
import { ReviewCard } from '../../../components/review/ReviewCard';
import { OverviewBox } from '../../../components/overview-box/OverviewBox';

import { Cta } from '../../../components/cta/Cta';
import { TourHeader } from '../../../components/tour-header/TourHeader';
import { TourDescription } from '../../../components/tour-description/TourDescription';
const Tour: FC = () => {
  return (
    <div>
      <TourHeader />

      <section className='section-description'>
        <OverviewBox />

        <TourDescription />
      </section>

      {/* <section className='section-pictures'>
        <div className='picture-box'>
          <img
            className='picture-box__img picture-box__img--1'
            src='img/tour-5-1.jpg'
            alt='The Park Camper Tour 1'
          />
        </div>
        <div className='picture-box'>
          <img
            className='picture-box__img picture-box__img--2'
            src='img/tour-5-2.jpg'
            alt='The Park Camper Tour 1'
          />
        </div>
        <div className='picture-box'>
          <img
            className='picture-box__img picture-box__img--3'
            src='img/tour-5-3.jpg'
            alt='The Park Camper Tour 1'
          />
        </div>
      </section> */}

      <section className='section-reviews'>
        <div className='reviews'>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </section>

      <section className='section-cta'>
        <Cta />
      </section>
    </div>
  );
};

export default Tour;
