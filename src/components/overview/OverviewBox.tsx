import { FC } from 'react';
import styled from 'styled-components';
import { AiOutlineCalendar, AiOutlineStar } from 'react-icons/ai';
import { MdPeopleOutline } from 'react-icons/md';
import { BiTrendingUp } from 'react-icons/bi';
import { TourGuide, OverviewDetail, HeadingSecondary } from '../../components';
import { OverviewBoxProps, guideType } from '../../types/types';
import { guides as users } from '../../mocks';

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
  guides = ['5c8a22c62f8fb814b56fa18b', '5c8a1f4e2f8fb814b56fa185'],
}) => {
  const firstGuide: guideType = users?.filter(
    (guide) => guide._id === guides[0]
  )[0];
  const secondGuide: guideType = users?.filter(
    (guide) => guide._id === guides[1]
  )[0];

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
            name={(firstGuide && firstGuide?.name) || ''}
            title={`Lead Guide`}
            photo={(firstGuide && firstGuide?.photo) || ''}
          />

          <TourGuide
            name={(secondGuide && secondGuide?.name) || ''}
            title={`Lead Guide`}
            photo={(secondGuide && secondGuide?.photo) || ''}
          />
        </OverviewBoxGroup>
      </div>
    </OverviewBoxBase>
  );
};
