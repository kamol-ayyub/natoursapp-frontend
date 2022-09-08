import React from 'react';
import { ReviewCard } from './ReviewCard';

export const Review = ({ data }: any) => {
  return (
    <section className='section-reviews'>
      <div className='reviews'>
        {data &&
          data?.map((el: any) => {
            return (
              <ReviewCard
                key={el._id}
                review={el?.review}
                user={el?.user.name}
                userPhoto={el?.user.photo}
              />
            );
          })}
      </div>
    </section>
  );
};
