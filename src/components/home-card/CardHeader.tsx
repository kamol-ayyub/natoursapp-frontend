import { FC } from 'react';
import { HeadingTertirary, Image } from '@/components';
import styled from 'styled-components';
import { CardHeaderProps } from '@/types/types';

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
    from(var(--headingLightGreen)),
    to(var(--darkGreen))
  );
  background-image: linear-gradient(
    to right bottom,
    var(--headingLightGreen),
    var(--darkGreen)
  );
  opacity: 0.7;
`;
export const CardHeader: FC<CardHeaderProps> = ({ imageCover, name }) => {
  return (
    <CardHeaderBase>
      <CardPicture>
        <CardPicOverlay>&nbsp;</CardPicOverlay>
        <Image
          src={require(`../../img/tours/${imageCover}`)}
          alt={`../../img/tours/${imageCover}`}
          CardPicImage
        />
      </CardPicture>
      <HeadingTertirary>{name}</HeadingTertirary>
    </CardHeaderBase>
  );
};
