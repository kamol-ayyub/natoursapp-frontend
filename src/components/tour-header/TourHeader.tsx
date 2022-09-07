import React, { FC } from 'react';
import { GoLocation } from 'react-icons/go';
import { BsClock } from 'react-icons/bs';

type HeaderProps = any;

export const TourHeader: FC<HeaderProps> = ({ data }) => {
  console.log(data);
  return (
    <section className='section-header'>
      <div className='header__hero'>
        <div className='header__hero-overlay'>&nbsp;</div>
        <img
          src={require(`../../img/tours/${data?.imageCover}`)}
          alt={`${data?.imageCover}`}
          className='header__hero-img'
        />
      </div>
      <div className='heading-box'>
        <h1 className='heading-primary'>
          <span>{data?.name}</span>
        </h1>
        <div className='heading-box__group'>
          <div className='heading-box__detail'>
            <BsClock />
            <span className='heading-box__text'>{data?.duration}</span>
          </div>
          <div className='heading-box__detail'>
            <GoLocation />
            <span className='heading-box__text'>
              {data?.startLocation.description}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
