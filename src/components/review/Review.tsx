import { FC } from 'react';
import styled from 'styled-components';
import { ReviewProps } from '@/types/types';
import { ReviewCard } from './ReviewCard';
const SectionreviewBase = styled.section`
  margin-top: calc(0px - var(--section-rotate));
  padding: calc(5rem + var(--section-rotate)) 0;
  position: relative;
  z-index: 1000;
  background: -webkit-gradient(
    linear,
    left top,
    right bottom,
    from(var(--headingLightGreen)),
    to(var(--darkGreen))
  );
  background: linear-gradient(
    to right bottom,
    var(--headingLightGreen),
    var(--darkGreen)
  );
  clip-path: polygon(
    0 var(--section-rotate),
    100% 0,
    100% calc(100% - var(--section-rotate)),
    0 100%
  );
  -webkit-clip-path: polygon(
    0 var(--section-rotate),
    100% 0,
    100% calc(100% - var(--section-rotate)),
    0 100%
  );
`;

const ReviewsBase = styled.div`
  padding: 5rem 0;
  display: grid;
  grid-column-gap: 6rem;
  grid-auto-flow: column;
  overflow-x: scroll;
  -ms-scroll-snap-type: x mandatory;
  scroll-snap-type: x mandatory;
  ::before,
  ::after {
    content: '';
    width: 2rem;
  }
`;

export const Review: FC<ReviewProps> = ({ data }) => {
  return (
    <SectionreviewBase>
      <ReviewsBase>
        {data &&
          data?.map((el: any) => {
            return (
              <ReviewCard
                key={el._id}
                review={el?.review}
                user={el?.user.name}
                userPhoto={el?.user.photo}
              />
            );
          })}
      </ReviewsBase>
    </SectionreviewBase>
  );
};
