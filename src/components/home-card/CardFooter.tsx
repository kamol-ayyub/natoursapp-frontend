import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
interface CardFooterProps {
  el: any;
}
interface Cardelements {
  text?: boolean;
  value?: boolean;
  children: ReactNode;
}
const CardFooterBase = styled.div`
  background-color: #f7f7f7;
  padding: 2.5rem 3rem;
  border-top: 1px solid #f1f1f1;
  font-size: 1.4rem;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  margin-top: auto;
`;
const CardFooterText = styled.span<Cardelements>`
  ${(props) =>
    props.text &&
    css`
      color: #999;
    `}
  ${(props) =>
    props.value &&
    css`
      font-weight: 700;
    `}
`;
const CardRatings = styled.p`
  grid-row: 2 / 3;
`;

const CardButton = styled(Link)`
  grid-row: 1 / 3;
  justify-self: end;
  -ms-flex-item-align: center;
  align-self: center;
  background-color: #55c57a;
  color: #fff;
  ::after {
    background-color: #55c57a;
  }
  padding: 1.25rem 3rem !important;
  font-size: 1.4rem !important;
`;
export const CardFooter: FC<CardFooterProps> = ({ el }) => {
  return (
    <CardFooterBase>
      <p>
        <CardFooterText value>${el?.price}</CardFooterText>
        <CardFooterText text> per person</CardFooterText>
      </p>
      <CardRatings>
        <CardFooterText value>
          {el?.ratingsAverage} {'  '}
        </CardFooterText>
        <CardFooterText text> rating ({el?.ratingsQuantity})</CardFooterText>
      </CardRatings>
      <CardButton to={`/tour/${el?._id}`}>Details</CardButton>
    </CardFooterBase>
  );
};
