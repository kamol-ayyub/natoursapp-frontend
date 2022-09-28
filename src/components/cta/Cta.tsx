import { FC } from 'react';
import { CtaProps } from '../../types/types';
import { Button } from '../html-elements/Button';
import { HeadingSecondary, Image } from '../index';
import { CtaContent, CtaImg, CtaText, CtaWrapper } from './';

export const Cta: FC<CtaProps> = ({ images, duration }) => {
  console.log(typeof duration);
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

      <CtaContent>
        <HeadingSecondary>What are you waiting for?</HeadingSecondary>
        <CtaText duration={duration} />
        <Button GreenBtn SpanRows>
          Book tour now!
        </Button>
      </CtaContent>
    </CtaWrapper>
  );
};
