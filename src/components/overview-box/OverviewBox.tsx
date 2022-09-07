import React, { FC } from 'react';
import { OverviewDetail } from '../overview-detail/OverviewDetail';
import { AiOutlineCalendar, AiOutlineStar } from 'react-icons/ai';
import { MdPeopleOutline } from 'react-icons/md';
import { BiTrendingUp } from 'react-icons/bi';

//types
type BoxProps = any;

export const OverviewBox: FC<BoxProps> = ({ data }) => {
  console.log(data);
  return (
    <div className='overview-box'>
      <div>
        <div className='overview-box__group'>
          <h2 className='heading-secondary ma-bt-lg'>Quick facts</h2>

          <OverviewDetail
            title={'Quick facts'}
            svg={<AiOutlineCalendar />}
            date={data?.startDates[0]?.substring(0, 4)}
            addition={'August'}
          />
          <OverviewDetail
            title={'Difficulty'}
            svg={<BiTrendingUp />}
            date={data?.difficulty}
          />

          <OverviewDetail
            title={'Participants'}
            svg={<MdPeopleOutline />}
            date={data?.maxGroupSize}
            addition={`People`}
          />
          <OverviewDetail
            title={'Rating'}
            svg={<AiOutlineStar />}
            date={data?.ratingsAverage}
          />
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
  );
};
