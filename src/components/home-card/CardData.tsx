import { FC, ReactNode } from 'react';
import styled from 'styled-components';
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

interface CardDataProps {
  Svg?: ReactNode;
  Span?: ReactNode;
}

export const CardData: FC<CardDataProps> = ({ Svg, Span }) => {
  return (
    <CardDataBase>
      {Svg}
      {Span}
    </CardDataBase>
  );
};
