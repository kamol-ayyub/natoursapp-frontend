import { GoLocation } from 'react-icons/go';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsFlag } from 'react-icons/bs';
import { VscAccount } from 'react-icons/vsc';
import { FC } from 'react';
import { CardData, Span } from '../index';
import styled from 'styled-components';
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
export const CardDetails: FC = ({ el }: any) => {
  return (
    <CardDetailsBase>
      <CardSubHeading>
        {el?.difficulty} {el?.duration}-day tour
      </CardSubHeading>
      <CardText>{el?.summary}</CardText>
      <CardData
        Svg={<GoLocation />}
        Span={<Span>{el?.startLocation.description}</Span>}
      />
      <CardData
        Svg={<AiOutlineCalendar />}
        Span={<Span>April {el?.startDates[0].substring(0, 4)}</Span>}
      />
      <CardData
        Svg={<BsFlag />}
        Span={<Span>{el?.locations.length} stops</Span>}
      />
      <CardData
        Svg={<VscAccount />}
        Span={<Span>{el?.maxGroupSize} people</Span>}
      />
    </CardDetailsBase>
  );
};
