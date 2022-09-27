import { FC } from 'react';
import { GuideProps } from '../../types/types';
import { Image } from '../index';

export const TourGuide: FC<GuideProps> = ({ name, title, photo }) => {
  return (
    <div className='overview-box__detail'>
      <Image src={`../../img/users/${photo}`} alt='Lead guide' OverviewBoxImg />
      <span className='overview-box__label'>{title}</span>
      <span className='overview-box__text'>{name}</span>
    </div>
  );
};
