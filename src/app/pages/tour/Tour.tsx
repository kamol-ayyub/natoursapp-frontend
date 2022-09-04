import { FC } from 'react';
import { ReviewCard } from '../../../components/review/ReviewCard';
import { Cta } from '../../../components/cta/Cta';
const Tour: FC = () => {
  return (
    <div>
      <section className='section-header'>
        <div className='heading-box'>
          <h1 className='heading-primary'>
            <span>
              The Park <br />
              Camper Tour
            </span>
          </h1>
          <div className='heading-box__group'>
            <div className='heading-box__detail'>
              <svg className='heading-box__icon'>
                <use xlinkHref='img/icons.svg#icon-clock'></use>
              </svg>
              <span className='heading-box__text'>10 days</span>
            </div>
            <div className='heading-box__detail'>
              <svg className='heading-box__icon'>
                <use xlinkHref='img/icons.svg#icon-map-pin'></use>
              </svg>
              <span className='heading-box__text'>Las Vegas, USA</span>
            </div>
          </div>
        </div>
      </section>

      <section className='section-description'>
        <div className='overview-box'>
          <div>
            <div className='overview-box__group'>
              <h2 className='heading-secondary ma-bt-lg'>Quick facts</h2>
              <div className='overview-box__detail'>
                <svg className='overview-box__icon'>
                  <use xlinkHref='img/icons.svg#icon-calendar'></use>
                </svg>
                <span className='overview-box__label'>Next date</span>
                <span className='overview-box__text'>August 2021</span>
              </div>
              <div className='overview-box__detail'>
                <svg className='overview-box__icon'>
                  <use xlinkHref='img/icons.svg#icon-trending-up'></use>
                </svg>
                <span className='overview-box__label'>Difficulty</span>
                <span className='overview-box__text'>Medium</span>
              </div>
              <div className='overview-box__detail'>
                <svg className='overview-box__icon'>
                  <use xlinkHref='img/icons.svg#icon-user'></use>
                </svg>
                <span className='overview-box__label'>Participants</span>
                <span className='overview-box__text'>10 people</span>
              </div>
              <div className='overview-box__detail'>
                <svg className='overview-box__icon'>
                  <use xlinkHref='img/icons.svg#icon-star'></use>
                </svg>
                <span className='overview-box__label'>Rating</span>
                <span className='overview-box__text'>4.9 / 5</span>
              </div>
            </div>

            <div className='overview-box__group'>
              <h2 className='heading-secondary ma-bt-lg'>Your tour guides</h2>

              <div className='overview-box__detail'>
                <img
                  src='img/users/user-19.jpg'
                  alt='Lead guide'
                  className='overview-box__img'
                />
                <span className='overview-box__label'>Lead guide</span>
                <span className='overview-box__text'>Steven Miller</span>
              </div>
              <div className='overview-box__detail'>
                <img
                  src='img/users/user-18.jpg'
                  alt='Tour guide'
                  className='overview-box__img'
                />
                <span className='overview-box__label'>Tour guide</span>
                <span className='overview-box__text'>Lisa Brown</span>
              </div>
              <div className='overview-box__detail'>
                <img
                  src='img/users/user-17.jpg'
                  alt='Intern'
                  className='overview-box__img'
                />
                <span className='overview-box__label'>Intern</span>
                <span className='overview-box__text'>Max Smith</span>
              </div>
            </div>
          </div>
        </div>

        <div className='description-box'>
          <h2 className='heading-secondary ma-bt-lg'>
            About the park camper tour
          </h2>
          <p className='description__text'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p className='description__text'>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum!
          </p>
        </div>
      </section>

      <section className='section-pictures'>
        <div className='picture-box'>
          <img
            className='picture-box__img picture-box__img--1'
            src='img/tour-5-1.jpg'
            alt='The Park Camper Tour 1'
          />
        </div>
        <div className='picture-box'>
          <img
            className='picture-box__img picture-box__img--2'
            src='img/tour-5-2.jpg'
            alt='The Park Camper Tour 1'
          />
        </div>
        <div className='picture-box'>
          <img
            className='picture-box__img picture-box__img--3'
            src='img/tour-5-3.jpg'
            alt='The Park Camper Tour 1'
          />
        </div>
      </section>

      <section className='section-reviews'>
        <div className='reviews'>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </section>

      <section className='section-cta'>
        <Cta />
      </section>
    </div>
  );
};

export default Tour;
