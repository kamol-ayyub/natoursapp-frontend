import { FC } from 'react';
import { ReviewStar } from './ReviewStar';
import { ReviewerType } from '@/types/types';
import styled from 'styled-components';
const ReviewCardBase = styled.div`
  width: 30rem;
  padding: 4rem;
  background-color: var(--mainColor-f7);
  border-radius: 3px;
  -webkit-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  scroll-snap-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;
const ReviewAvatarBase = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 2rem;
`;
const ReviewAvatarImg = styled.img`
  height: 4.5rem;
  border-radius: 50%;
  margin-right: 1.5rem;
`;

const ReviewsUser = styled.h6`
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
`;
const ReviewsText = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-style: italic;
  font-weight: 400;
`;
export const ReviewCard: FC<ReviewerType> = ({ review, user, userPhoto }) => {
  return (
    <ReviewCardBase>
      <ReviewAvatarBase>
        <ReviewAvatarImg
          src={require(`../../../public/img/users/${userPhoto}`)}
          alt={`../../../public/img/users/${userPhoto}`}
        />
        <ReviewsUser> {user} </ReviewsUser>
      </ReviewAvatarBase>
      <ReviewsText>{review}</ReviewsText>

      <ReviewStar />
    </ReviewCardBase>
  );
};
