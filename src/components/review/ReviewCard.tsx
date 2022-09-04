import { ReviewStar } from './ReviewStar';
export const ReviewCard = () => {
  return (
    <div className='reviews__card'>
      <div className='reviews__avatar'>
        <img
          src='img/users/user-7.jpg'
          alt='Jim Brown'
          className='reviews__avatar-img'
        />
        <h6 className='reviews__user'>Jim Brown</h6>
      </div>
      <p className='reviews__text'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
        dignissimos sint quo commodi corrupti accusantium veniam saepe numquam.
      </p>
      <div className='reviews__rating'>
        <ReviewStar />
        <ReviewStar />
        <ReviewStar />
        <ReviewStar />
        <ReviewStar />
      </div>
    </div>
  );
};
