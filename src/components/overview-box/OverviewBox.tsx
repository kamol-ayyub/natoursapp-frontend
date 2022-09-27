import React, { FC } from 'react';
import { AiOutlineCalendar, AiOutlineStar } from 'react-icons/ai';
import { MdPeopleOutline } from 'react-icons/md';
import { BiTrendingUp } from 'react-icons/bi';
import { TourGuide, OverviewDetail } from '../index';
import { OverviewBoxProps } from '../../types/types';

export const OverviewBox: FC<OverviewBoxProps> = ({
  startDates,
  difficulty,
  maxGroupSize,
  ratingsAverage,
  guides,
}) => {
  return (
    <div className='overview-box'>
      <div>
        <div className='overview-box__group'>
          <h2 className='heading-secondary ma-bt-lg'>Quick facts</h2>

          <OverviewDetail
            title={'Quick facts'}
            svg={<AiOutlineCalendar />}
            date={startDates && startDates[0] && startDates[0]?.substring(0, 4)}
            addition={'August'}
          />
          <OverviewDetail
            title={'Difficulty'}
            svg={<BiTrendingUp />}
            date={difficulty && difficulty}
          />

          <OverviewDetail
            title={'Participants'}
            svg={<MdPeopleOutline />}
            date={maxGroupSize && maxGroupSize}
            addition={`People`}
          />
          <OverviewDetail
            title={'Rating'}
            svg={<AiOutlineStar />}
            date={ratingsAverage && ratingsAverage}
          />
        </div>

        <div className='overview-box__group'>
          <h2 className='heading-secondary ma-bt-lg'>Your tour guides</h2>

          <TourGuide
            name={(guides && guides[0]?.name) || ''}
            title={`Lead Guide`}
            photo={(guides && guides[0]?.photo) || ''}
          />

          <TourGuide
            name={(guides && guides[0]?.name) || ''}
            title={`Tour Guide`}
            photo={(guides && guides[1]?.photo) || ''}
          />
        </div>
      </div>
    </div>
  );
};
