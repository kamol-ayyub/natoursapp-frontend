import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { GoLocation } from 'react-icons/go';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsFlag } from 'react-icons/bs';
import { VscAccount } from 'react-icons/vsc';
import { CardData, Image, Span } from '../index';
import styled from 'styled-components';
//types
interface CardProps {
  allTours: Object[];
}

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
              <div className='card'>
                <div className='card__header'>
                  <div className='card__picture'>
                    <div className='card__picture-overlay'>&nbsp;</div>
                    <Image
                      src={require(`../../img/tours/${el?.imageCover}`)}
                      alt={`../../img/tours/${el?.imageCover}`}
                      CardPicImage
                    />
                  </div>

                  <h3 className='heading-tertirary'>
                    <Span>{el?.name}</Span>
                  </h3>
                </div>

                <div className='card__details'>
                  <h4 className='card__sub-heading'>
                    {el?.difficulty} {el?.duration}-day tour
                  </h4>
                  <p className='card__text'>{el?.summary}</p>
                  <CardData
                    Svg={<GoLocation />}
                    Span={<Span>{el?.startLocation.description}</Span>}
                  />
                  <CardData
                    Svg={<AiOutlineCalendar />}
                    Span={
                      <Span>April {el?.startDates[0].substring(0, 4)}</Span>
                    }
                  />
                  <CardData
                    Svg={<BsFlag />}
                    Span={<Span>{el?.locations.length} stops</Span>}
                  />
                  <CardData
                    Svg={<VscAccount />}
                    Span={<Span>{el?.maxGroupSize} people</Span>}
                  />
                </div>

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
              </div>
            </IconContext.Provider>
          );
        })}
    </>
  );
};
