import { FC } from 'react';
import { GoLocation } from 'react-icons/go';
import { BsClock } from 'react-icons/bs';
import { Image, Span, HeadingPrimary } from '../../components';
import styled from 'styled-components';
import { HeaderProps } from '../../types/types';
const SectionHeader = styled.section`
  position: relative;
  height: 38vw;
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - var(--section-rotate)),
    0 100%
  );
  -webkit-clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - var(--section-rotate)),
    0 100%
  );
`;
const HeaderHero = styled.div`
  height: 100%;
`;
const HeaderHeroOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: -webkit-gradient(
    linear,
    left top,
    right bottom,
    from(var(--headingLightGreen)),
    to(var(--darkGreen))
  );
  background-image: linear-gradient(
    to right bottom,
    var(--headingLightGreen),
    var(--darkGreen)
  );
  opacity: 0.85;
`;
const HeadingBox = styled.div`
  position: absolute;
  bottom: 13vw;
  left: 50%;
  top: 35%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;
const HeadingBoxGroup = styled.div`
  color: var(--mainColor-f7);
  margin-top: 3rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`;
const HeadingBoxDetail = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.15);
  svg {
    margin-right: 0.8rem;
  }
  :not(:last-child) {
    margin-right: 4rem;
  }
`;

export const TourHeader: FC<HeaderProps> = ({
  description,
  duration,
  imageCover,
  name,
}) => {
  return (
    <SectionHeader>
      <HeaderHero>
        <HeaderHeroOverlay>&nbsp;</HeaderHeroOverlay>
        <Image
          src={`../../img/tours/${imageCover}`}
          alt={`${imageCover}`}
          HeaderHeroImg
        />
      </HeaderHero>
      <HeadingBox>
        <HeadingPrimary>{name}</HeadingPrimary>
        <HeadingBoxGroup>
          <HeadingBoxDetail>
            <BsClock />
            <Span>{duration} days</Span>
          </HeadingBoxDetail>
          <HeadingBoxDetail>
            <GoLocation />
            <Span>{description}</Span>
          </HeadingBoxDetail>
        </HeadingBoxGroup>
      </HeadingBox>
    </SectionHeader>
  );
};
