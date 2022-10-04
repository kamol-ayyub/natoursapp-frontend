import { FC } from 'react';
import { IconContext } from 'react-icons';
import { CardHeader, CardDetails, CardFooter } from '@/components';
import { CardProps } from '@/types/types';
import styled from 'styled-components';

//styled components
const CardBase = styled.div`
  border-radius: 3px;
  overflow: hidden;
  -webkit-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.1);
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.1);
  background-color: var(--whiteColor);
  -webkit-transition: 0.3s all;
  transition: 0.3s all;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const Card: FC<CardProps> = ({ allTours }) => {
  return (
    <>
      {allTours &&
        allTours?.map((el: any) => {
          console.log(el, ' el?.startLocations');
          return (
            <IconContext.Provider
              key={el?.id}
              value={{
                style: {
                  height: '2rem',
                  width: '2rem',
                  fill: 'var(--greenColor-55)',
                },
              }}
            >
              <CardBase>
                <CardHeader imageCover={el?.imageCover} name={el?.name} />
                <CardDetails
                  difficulty={el?.difficulty}
                  duration={el?.duration}
                  description={el?.startLocation?.description}
                  summary={el?.summary}
                  startDates={el?.startDates}
                  locations={el?.locations}
                  maxGroupSize={el?.maxGroupSize}
                />
                <CardFooter
                  _id={el?._id}
                  price={el?.price}
                  ratingsAverage={el?.ratingsAverage}
                  ratingsQuantity={el?.ratingsQuantity}
                />
              </CardBase>
            </IconContext.Provider>
          );
        })}
    </>
  );
};
