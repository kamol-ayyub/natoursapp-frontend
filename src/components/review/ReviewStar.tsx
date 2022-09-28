import { AiOutlineStar } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import styled from 'styled-components';
const ReviewsRating = styled.div`
  margin-top: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
`;
export const ReviewStar = () => {
  return (
    <IconContext.Provider
      value={{
        style: {
          fill: '#55c57a',
          height: '2rem',
          width: '2rem',
          marginRight: '1px',
        },
      }}
    >
      <ReviewsRating>
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
      </ReviewsRating>
    </IconContext.Provider>
  );
};
