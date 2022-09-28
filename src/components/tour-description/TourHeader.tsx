import { FC } from 'react';
import { GoLocation } from 'react-icons/go';
import { BsClock } from 'react-icons/bs';
import { Image, Span, HeadingPrimary } from '../index';
import styled from 'styled-components';
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
    from(#7dd56f),
    to(#28b487)
  );
  background-image: linear-gradient(to right bottom, #7dd56f, #28b487);
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
  color: #f7f7f7;
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
type HeaderProps = any;

export const TourHeader: FC<HeaderProps> = ({ data }) => {
  return (
    <SectionHeader>
      <HeaderHero>
        <HeaderHeroOverlay>&nbsp;</HeaderHeroOverlay>
        <Image
          src={`../../img/tours/${data?.imageCover}`}
          alt={`${data?.imageCover}`}
          HeaderHeroImg
        />
      </HeaderHero>
      <HeadingBox>
        <HeadingPrimary>{data?.name}</HeadingPrimary>
        <HeadingBoxGroup>
          <HeadingBoxDetail>
            <BsClock />
            <Span>{data?.duration} days</Span>
          </HeadingBoxDetail>
          <HeadingBoxDetail>
            <GoLocation />
            <Span>{data?.startLocation.description}</Span>
          </HeadingBoxDetail>
        </HeadingBoxGroup>
      </HeadingBox>
    </SectionHeader>
  );
};
