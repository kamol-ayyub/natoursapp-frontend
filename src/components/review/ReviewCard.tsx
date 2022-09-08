import { ReviewStar } from './ReviewStar';
import { ReviewerType } from '../../types/types';

export const ReviewCard = ({ review, user, userPhoto }: ReviewerType) => {
  return (
    <div className='reviews__card'>
      <div className='reviews__avatar'>
        <img
          src={require(`../../../public/img/users/${userPhoto}`)}
          alt='Jim Brown'
          className='reviews__avatar-img'
        />
        <h6 className='reviews__user'> {user} </h6>
      </div>
      <p className='reviews__text'>{review}</p>
      <div className='reviews__rating'>
        <ReviewStar />
      </div>
    </div>
  );
};
