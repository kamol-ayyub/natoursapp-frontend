import { FC } from 'react';
import styled from 'styled-components';
import { AiOutlineCalendar, AiOutlineStar } from 'react-icons/ai';
import { MdPeopleOutline } from 'react-icons/md';
import { BiTrendingUp } from 'react-icons/bi';
import { TourGuide, OverviewDetail, HeadingSecondary } from '../index';
import { OverviewBoxProps } from '../../types/types';

const OverviewBoxBase = styled.div`
  background-color: white;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`;
const OverviewBoxGroup = styled.div`
  :not(:last-child) {
    margin-bottom: 7rem;
  }
`;

export const OverviewBox: FC<OverviewBoxProps> = ({
  startDates,
  difficulty,
  maxGroupSize,
  ratingsAverage,
  guides,
}) => {
  return (
    <OverviewBoxBase>
      <div>
        <OverviewBoxGroup>
          <HeadingSecondary MaBtLg>Quick facts</HeadingSecondary>
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
        </OverviewBoxGroup>

        <OverviewBoxGroup>
          <HeadingSecondary MaBtLg>Your tour guides</HeadingSecondary>

          <TourGuide
            name={(guides && guides[0]?.name) || ''}
            title={`Lead Guide`}
            photo={(guides && guides[0]?.photo) || ''}
          />

          <TourGuide
            name={(guides && guides[1]?.name) || ''}
            title={`Tour Guide`}
            photo={(guides && guides[1]?.photo) || ''}
          />
        </OverviewBoxGroup>
      </div>
    </OverviewBoxBase>
  );
};
