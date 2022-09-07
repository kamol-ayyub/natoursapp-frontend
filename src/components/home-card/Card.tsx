import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { GoLocation } from 'react-icons/go';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsFlag } from 'react-icons/bs';
import { VscAccount } from 'react-icons/vsc';

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
                    <img
                      src={require(`../../img/tours/${el?.imageCover}`)}
                      alt={`../../img/tours/${el?.imageCover}`}
                      className='card__picture-img'
                    />
                  </div>

                  <h3 className='heading-tertirary'>
                    <span>{el?.name}</span>
                  </h3>
                </div>

                <div className='card__details'>
                  <h4 className='card__sub-heading'>
                    {el?.difficulty} {el?.duration}-day tour
                  </h4>
                  <p className='card__text'>{el?.summary}</p>
                  <div className='card__data'>
                    <GoLocation />
                    <span>{el?.startLocation.description}</span>
                  </div>
                  <div className='card__data'>
                    <AiOutlineCalendar />
                    <span>April {el?.startDates[0].substring(0, 4)}</span>
                  </div>
                  <div className='card__data'>
                    <BsFlag />
                    <span>{el?.locations.length} stops</span>
                  </div>
                  <div className='card__data'>
                    <VscAccount />
                    <span>{el?.maxGroupSize} people</span>
                  </div>
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
                      {' '}
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
