import React from 'react';

export const TourDescription = ({ tourName, description }: any) => {
  return (
    <div className='description-box'>
      <h2 className='heading-secondary ma-bt-lg'>{tourName}</h2>
      <p className='description__text'>{description}</p>
    </div>
  );
};
