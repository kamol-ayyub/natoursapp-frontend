import { FC, useContext } from 'react';
import { CtaProps } from '../../types/types';

import {
  CtaContent,
  CtaImg,
  CtaText,
  CtaWrapper,
  Button,
  HeadingSecondary,
  Image,
  RouteLink,
} from '../../components';
import { UserIsLoggedContext } from '../../context/Context';

export const Cta: FC<CtaProps> = ({ images, duration, tourId }) => {
  const { logged } = useContext(UserIsLoggedContext);
  return (
    <>
      <CtaWrapper>
        <CtaImg CtaLogo>
          <Image
            src={require(`../../img/logo-white.png`)}
            alt={`Natours logo`}
          />
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
          {logged ? (
            <Button GreenBtn SpanRows>
              <RouteLink to={`/checkout-session/${tourId}`}>
                Book tour now!
              </RouteLink>
            </Button>
          ) : (
            <Button GreenBtn SpanRows>
              <RouteLink to={'/login'}>Login</RouteLink>
            </Button>
          )}
        </CtaContent>
      </CtaWrapper>
    </>
  );
};
