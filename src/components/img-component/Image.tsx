import { FC } from 'react';
import styled, { css } from 'styled-components';
interface ImageType {
  src?: string;
  alt: string;
  CtaImg?: boolean;
  CtaImgOne?: boolean;
  CtaImgTwo?: boolean;
  FormUserPhoto?: boolean;
}
interface ImageBaseType {
  CtaImg?: boolean;
}
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
`;
export const Image: FC<ImageType> = ({
  src,
  alt,
  CtaImg,
  CtaImgOne,
  CtaImgTwo,
  FormUserPhoto,
}) => {
  return (
    <ImageBase
      CtaImgTwo={CtaImgTwo}
      CtaImgOne={CtaImgOne}
      CtaImg={CtaImg}
      src={src}
      alt={alt}
      FormUserPhoto={FormUserPhoto}
    />
  );
};
