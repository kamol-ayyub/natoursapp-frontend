import { FC } from 'react';
import { CtaProps } from '../../types/types';
import { Button } from '../button/Button';
import { HeadingSecondary, Image } from '../index';
import { CtaImg } from './CtaImg';
import { CtaWrapper } from './CtaWrapper';

export const Cta: FC<CtaProps> = ({ images, duration }) => {
  return (
    <CtaWrapper>
      <CtaImg CtaLogo>
        <Image src={require(`../../img/logo-white.png`)} alt={`Natours logo`} />
      </CtaImg>
      {images && (
        <Image
          CtaImg
          CtaImgOne
          src={require(`../../../public/img/tours/${images[1]}`)}
          alt={`../../../public/img/tours/${images[1]}`}
        />
      )}
      {images && (
        <Image
          CtaImg
          CtaImgTwo
          src={require(`../../../public/img/tours/${images[2]}`)}
          alt={`../../../public/img/tours/${images[1]}`}
        />
      )}

      <div className='cta__content'>
        <HeadingSecondary>What are you waiting for?</HeadingSecondary>
        <p className='cta__text'>
          {duration} days. 1 adventure. Infinite memories. Make it yours today!
        </p>
        <Button GreenBtn SpanRows>
          Book tour now!
        </Button>
      </div>
    </CtaWrapper>
  );
};
