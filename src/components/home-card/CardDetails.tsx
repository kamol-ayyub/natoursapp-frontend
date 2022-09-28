import styled from 'styled-components';
import { GoLocation } from 'react-icons/go';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsFlag } from 'react-icons/bs';
import { VscAccount } from 'react-icons/vsc';
import { FC } from 'react';
import { CardData, Span } from '../index';
import { CardDetailsProps } from '../../types/types';

const CardDetailsBase = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.75rem;
  grid-column-gap: 2rem;
  padding: 2.5rem 3rem;
`;

const CardSubHeading = styled.h4`
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 700;
  grid-column: 1 / -1;
`;

const CardText = styled.p`
  grid-column: 1 / -1;
  font-size: 1.5rem;
  font-style: italic;
  margin-top: -1rem;
  margin-bottom: 0.75rem;
`;

export const CardDetails: FC<CardDetailsProps> = ({
  difficulty,
  description,
  duration,
  locations,
  maxGroupSize,
  startDates,
  summary,
}) => {
  return (
    <CardDetailsBase>
      <CardSubHeading>
        {difficulty} {duration}-day tour
      </CardSubHeading>
      <CardText>{summary}</CardText>
      <CardData Svg={<GoLocation />} Span={<Span>{description}</Span>} />
      <CardData
        Svg={<AiOutlineCalendar />}
        Span={<Span>April {startDates[0].substring(0, 4)}</Span>}
      />
      <CardData Svg={<BsFlag />} Span={<Span>{locations.length} stops</Span>} />
      <CardData
        Svg={<VscAccount />}
        Span={<Span>{maxGroupSize} people</Span>}
      />
    </CardDetailsBase>
  );
};
