import React, { FC } from 'react';
import { OverviewDetail } from '../overview-detail/OverviewDetail';
import { AiOutlineCalendar, AiOutlineStar } from 'react-icons/ai';
import { MdPeopleOutline } from 'react-icons/md';
import { BiTrendingUp } from 'react-icons/bi';
import { TourGuide } from '../tour-guides/TourGuide';

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

          <TourGuide
            name={data?.guides[0]?.name}
            title={`Lead Guide`}
            photo={data?.guides[0]?.photo}
          />

          <TourGuide
            name={data?.guides[1]?.name}
            title={`Tour Guide`}
            photo={data?.guides[1]?.photo}
          />
        </div>
      </div>
    </div>
  );
};
