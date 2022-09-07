import { FC } from 'react';

type GuideProps = {
  name: String;
  title: String;
  photo: String;
};
export const TourGuide: FC<GuideProps> = ({ name, title, photo }) => {
  return (
    <div className='overview-box__detail'>
      <img
        src={`../../img/users/${photo}`}
        alt='Lead guide'
        className='overview-box__img'
      />
      <span className='overview-box__label'>{title}</span>
      <span className='overview-box__text'>{name}</span>
    </div>
  );
};
