import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { GoLocation } from 'react-icons/go';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsFlag } from 'react-icons/bs';
import { VscAccount } from 'react-icons/vsc';

//types
interface CardProps {
  data: Object[] | null;
}

export const Card: FC<CardProps> = ({ data }) => {
  console.log(data);
  useEffect(() => {
    console.log('rendered Card component in useeffect hook');
  }, [data]);

  return (
    <IconContext.Provider value={{ className: 'card__icon' }}>
      <div className='card'>
        <div className='card__header'>
          <div className='card__picture'>
            <div className='card__picture-overlay'>&nbsp;</div>
            <img
              src='img/tour-1-cover.jpg'
              alt='Tour 1'
              className='card__picture-img'
            />
          </div>

          <h3 className='heading-tertirary'>
            <span>The Forest Hiker</span>
          </h3>
        </div>

        <div className='card__details'>
          <h4 className='card__sub-heading'>Easy 5-day tour</h4>
          <p className='card__text'>
            Breathtaking hike through the Canadian Banff National Park
          </p>
          <div className='card__data'>
            <GoLocation />
            <span>Banff, Canada</span>
          </div>
          <div className='card__data'>
            <AiOutlineCalendar />
            <span>April 2021</span>
          </div>
          <div className='card__data'>
            <BsFlag />
            <span>3 stops</span>
          </div>
          <div className='card__data'>
            <VscAccount />
            <span>25 people</span>
          </div>
        </div>

        <div className='card__footer'>
          <p>
            <span className='card__footer-value'>$297</span>
            <span className='card__footer-text'> per person</span>
          </p>
          <p className='card__ratings'>
            <span className='card__footer-value'>4.9</span>
            <span className='card__footer-text'> rating (21)</span>
          </p>
          <Link to='/tour/bla' className='btn btn--green btn--small'>
            Details
          </Link>
        </div>
      </div>
    </IconContext.Provider>
  );
};
