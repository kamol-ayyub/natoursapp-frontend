import { FC } from 'react';
import styled, { css } from 'styled-components';
import { ImageType } from '../../types/types';

const ImageBase = styled.img<ImageType>`
  ${(props) =>
    props.CtaImg &&
    css`
      height: 15rem;
      width: 15rem;
      position: absolute;
      left: 0;
      top: 50%;
      border-radius: 50%;
      -webkit-box-shadow: 1rem 0.5rem 3rem rgba(0, 0, 0, 0.15);
      box-shadow: 1rem 0.5rem 3rem rgba(0, 0, 0, 0.15);
    `}
  ${(props) =>
    props.CtaImgOne &&
    css`
      -webkit-transform: translate(-10%, -50%) scale(0.97);
      transform: translate(-10%, -50%) scale(0.97);
      z-index: 9;
    `}
    ${(props) =>
    props.CtaImgTwo &&
    css`
      -webkit-transform: translate(15%, -50%) scale(0.94);
      transform: translate(15%, -50%) scale(0.94);
      z-index: 8;
    `}
    ${(props) =>
    props.FormUserPhoto &&
    css`
      height: 7.5rem;
      width: 7.5rem;
      border-radius: 50%;
      margin-right: 2rem;
    `}
    ${(props) =>
    props.NavUserImg &&
    css`
      height: 3.5rem;
      width: 3.5rem;
      border-radius: 50%;
      margin-right: 1rem;
    `}
    ${(props) =>
    props.OverviewBoxImg &&
    css`
      border-radius: 50%;
      height: 3.5rem;
      margin-right: 1.25rem;
    `}
    ${(props) =>
    props.CardPicImage &&
    css`
      -o-object-fit: cover;
      object-fit: cover;
      height: 100%;
      width: 100%;
    `}
    ${(props) =>
    props.HeaderHeroImg &&
    css`
      -o-object-fit: cover;
      object-fit: cover;
      height: 100%;
      width: 100%;
      -o-object-position: 50% 25%;
      object-position: 50% 25%;
    `}
`;
export const Image: FC<ImageType> = ({
  src,
  alt,
  CtaImg,
  CtaImgOne,
  CtaImgTwo,
  FormUserPhoto,
  NavUserImg,
  OverviewBoxImg,
  CardPicImage,
  HeaderHeroImg,
}) => {
  return (
    <ImageBase
      CtaImgTwo={CtaImgTwo}
      CtaImgOne={CtaImgOne}
      CtaImg={CtaImg}
      src={src}
      alt={alt}
      FormUserPhoto={FormUserPhoto}
      NavUserImg={NavUserImg}
      OverviewBoxImg={OverviewBoxImg}
      CardPicImage={CardPicImage}
      HeaderHeroImg={HeaderHeroImg}
    />
  );
};
