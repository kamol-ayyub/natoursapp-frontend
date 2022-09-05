import React from 'react';
import { ReviewCard } from './ReviewCard';

export const Review = () => {
  return (
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
  );
};
