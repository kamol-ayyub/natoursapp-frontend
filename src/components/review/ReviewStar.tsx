import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { IconContext } from 'react-icons';
export const ReviewStar = () => {
  return (
    <IconContext.Provider value={{ className: 'reviews__star--active' }}>
      <AiOutlineStar />
      <AiOutlineStar />
      <AiOutlineStar />
      <AiOutlineStar />
      <AiOutlineStar />
    </IconContext.Provider>
  );
};
