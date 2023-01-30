import { FC } from 'react';
import styled from 'styled-components';
import { CardDataProps } from '../../types/types';
const CardDataBase = styled.div`
  font-size: 1.3rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  svg {
    margin-right: 0.7rem;
  }
`;

export const CardData: FC<CardDataProps> = ({ Svg, Span }) => {
  return (
    <CardDataBase>
      {Svg}
      {Span}
    </CardDataBase>
  );
};
