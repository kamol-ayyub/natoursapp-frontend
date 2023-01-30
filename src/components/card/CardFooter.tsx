import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { CardFooterProps, Cardelements } from '../../types/types';

const CardFooterBase = styled.div`
  background-color: var(--mainColor-f7);
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
      color: var(--gray);
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
  background-color: var(--greenColor-55);
  color: var(--whiteColor);
  ::after {
    background-color: var(--greenColor-55);
  }
  padding: 1.25rem 3rem !important;
  font-size: 1.4rem !important;
  border-radius: 10rem;
  text-transform: uppercase;
  display: inline-block;
  text-decoration: none;
  position: relative;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
  font-weight: 400;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  /*Add later when we use this for the button in form*/
  border: none;
  cursor: pointer;
`;
export const CardFooter: FC<CardFooterProps> = ({
  _id,
  price,
  ratingsAverage,
  ratingsQuantity,
}) => {
  return (
    <CardFooterBase>
      <p>
        <CardFooterText value>${price}</CardFooterText>
        <CardFooterText text> per person</CardFooterText>
      </p>
      <CardRatings>
        <CardFooterText value>
          {ratingsAverage} {'  '}
        </CardFooterText>
        <CardFooterText text> rating ({ratingsQuantity})</CardFooterText>
      </CardRatings>
      <CardButton to={`/tour/${_id}`}>Details</CardButton>
    </CardFooterBase>
  );
};
