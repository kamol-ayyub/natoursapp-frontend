import React, { FC } from 'react';
import { OverviewDetail } from '../overview-detail/OverviewDetail';
import { AiOutlineCalendar, AiOutlineStar } from 'react-icons/ai';
import { MdPeopleOutline } from 'react-icons/md';
import { BiTrendingUp } from 'react-icons/bi';
import { TourGuide } from '../tour-guides/TourGuide';
import { OverviewBoxProps } from '../../types/types';

//types

export const OverviewBox: FC<OverviewBoxProps> = ({
  data,
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
            date={startDates[0]?.substring(0, 4)}
            addition={'August'}
          />
          <OverviewDetail
            title={'Difficulty'}
            svg={<BiTrendingUp />}
            date={difficulty}
          />

          <OverviewDetail
            title={'Participants'}
            svg={<MdPeopleOutline />}
            date={maxGroupSize}
            addition={`People`}
          />
          <OverviewDetail
            title={'Rating'}
            svg={<AiOutlineStar />}
            date={ratingsAverage}
          />
        </div>

        <div className='overview-box__group'>
          <h2 className='heading-secondary ma-bt-lg'>Your tour guides</h2>

          <TourGuide
            name={guides[0]?.name}
            title={`Lead Guide`}
            photo={guides[0]?.photo}
          />

          <TourGuide
            name={guides[1]?.name}
            title={`Tour Guide`}
            photo={guides[1]?.photo}
          />
        </div>
      </div>
    </div>
  );
};
