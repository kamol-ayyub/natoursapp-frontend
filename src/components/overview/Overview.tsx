import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Overview: FC = () => {
  return (
    <>
      <main className='main'>
        <div className='card-container'>
          <div className='card'>
            <div className='card__header'>
              <div className='card__picture'>
                <div className='card__picture-overlay'>&nbsp;</div>
                <img
                  src='../../img/tours/tour-2-cover.jpg'
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
                <svg className='card__icon'>
                  <use xlinkHref='img/icons.svg#icon-map-pin'></use>
                </svg>
                <span>Banff, Canada</span>
              </div>
              <div className='card__data'>
                <svg className='card__icon'>
                  <use xlinkHref='img/icons.svg#icon-calendar'></use>
                </svg>
                <span>April 2021</span>
              </div>
              <div className='card__data'>
                <svg className='card__icon'>
                  <use xlinkHref='img/icons.svg#icon-flag'></use>
                </svg>
                <span>3 stops</span>
              </div>
              <div className='card__data'>
                <svg className='card__icon'>
                  <use xlinkHref='img/icons.svg#icon-user'></use>
                </svg>
                <span>25 people</span>
              </div>
            </div>

            <div className='card__footer'>
              <p>
                <span className='card__footer-value'>$297</span>
                <span className='card__footer-text'>per person</span>
              </p>
              <p className='card__ratings'>
                <span className='card__footer-value'>4.9</span>
                <span className='card__footer-text'>rating (21)</span>
              </p>
              <Link to='/tour/:element' className='btn btn--green btn--small'>
                Details
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Overview;
