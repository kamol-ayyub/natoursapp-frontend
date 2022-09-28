import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';

import { CardData, Image, Span, CardHeader, CardDetails } from '../index';
import { CardProps } from '../../types/types';
import styled from 'styled-components';

//styled components
const CardBase = styled.div`
  border-radius: 3px;
  overflow: hidden;
  -webkit-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.1);
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.1);
  background-color: #fff;
  -webkit-transition: 0.3s all;
  transition: 0.3s all;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const Card: FC<CardProps> = ({ allTours }) => {
  return (
    <>
      {allTours &&
        allTours?.map((el: any) => {
          return (
            <IconContext.Provider
              key={el?.id}
              value={{ className: 'card__icon' }}
            >
              <CardBase>
                <CardHeader el={el} />

                <CardDetails el={el} />

                <div className='card__footer'>
                  <p>
                    <span className='card__footer-value'>${el?.price}</span>
                    <span className='card__footer-text'> per person</span>
                  </p>
                  <p className='card__ratings'>
                    <span className='card__footer-value'>
                      {el?.ratingsAverage}
                    </span>
                    <span className='card__footer-text'>
                      rating ({el?.ratingsQuantity})
                    </span>
                  </p>
                  <Link
                    to={`/tour/${el?._id}`}
                    className='btn btn--green btn--small'
                  >
                    Details
                  </Link>
                </div>
              </CardBase>
            </IconContext.Provider>
          );
        })}
    </>
  );
};
