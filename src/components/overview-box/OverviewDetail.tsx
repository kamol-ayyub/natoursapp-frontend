import React from 'react';

export const OverviewDetail = () => {
  return (
    <div className='overview-box__detail'>
      <svg className='overview-box__icon'>
        <use xlinkHref='img/icons.svg#icon-calendar'></use>
      </svg>
      <span className='overview-box__label'>Next date</span>
      <span className='overview-box__text'>August 2021</span>
    </div>
  );
};
