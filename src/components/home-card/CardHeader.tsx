import React, { FC } from 'react';
import { HeadingTertirary, Image, Span } from '../index';
import styled from 'styled-components';
interface CardHeaderProps {
  el: any;
}

const CardHeaderBase = styled.div`
  position: relative;
`;
const CardPicture = styled.div`
  position: relative;
  -webkit-clip-path: polygon(0 0, 100% 0%, 100% 83%, 0% 98%);
  clip-path: polygon(0 0, 100% 0%, 100% 83%, 0% 98%);
  height: 22rem;
`;
const CardPicOverlay = styled.div`
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
  opacity: 0.7;
`;
export const CardHeader: FC<CardHeaderProps> = ({ el }) => {
  return (
    <CardHeaderBase>
      <CardPicture>
        <CardPicOverlay>&nbsp;</CardPicOverlay>
        <Image
          src={require(`../../img/tours/${el?.imageCover}`)}
          alt={`../../img/tours/${el?.imageCover}`}
          CardPicImage
        />
      </CardPicture>
      <HeadingTertirary>{el?.name}</HeadingTertirary>
    </CardHeaderBase>
  );
};
