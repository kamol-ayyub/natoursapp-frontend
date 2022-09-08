import React, { FC } from 'react';
import { CtaProps } from '../../types/types';

export const Cta: FC<CtaProps> = ({ images, duration }) => {
  return (
    <section className='section-cta'>
      <div className='cta'>
        <div className='cta__img cta__img--logo'>
          <img src={require(`../../img/logo-white.png`)} alt='Natours logo' />
        </div>
        {images && (
          <img
            src={require(`../../../public/img/tours/${images[1]}`)}
            alt={`../../../public/img/tours/${images[1]}`}
            className='cta__img cta__img--1'
          />
        )}
        {images && (
          <img
            src={require(`../../../public/img/tours/${images[2]}`)}
            alt={`../../../public/img/tours/${images[2]}`}
            className='cta__img cta__img--2'
          />
        )}

        <div className='cta__content'>
          <h2 className='heading-secondary'>What are you waiting for?</h2>
          <p className='cta__text'>
            {duration} days. 1 adventure. Infinite memories. Make it yours
            today!
          </p>
          <button className='btn btn--green span-all-rows'>
            Book tour now!
          </button>
        </div>
      </div>
    </section>
  );
};
