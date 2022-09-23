import React, { FC } from 'react';
import { CtaProps } from '../../types/types';
import { Button } from '../button/Button';
import { HeadingSecondary } from '../heading-secondary/HeadingSecondary';

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
          // todo imglarni componentga olish, FormInputni qaytadan, classnamesiz, propslar bilan togrilab qoyish, CTA pageni tugatish.
          <img
            src={require(`../../../public/img/tours/${images[2]}`)}
            alt={`../../../public/img/tours/${images[2]}`}
            className='cta__img cta__img--2'
          />
        )}

        <div className='cta__content'>
          <HeadingSecondary>What are you waiting for?</HeadingSecondary>
          <p className='cta__text'>
            {duration} days. 1 adventure. Infinite memories. Make it yours
            today!
          </p>
          <Button GreenBtn SpanRows>
            Book tour now!
          </Button>
        </div>
      </div>
    </section>
  );
};
