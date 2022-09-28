import { FC } from 'react';
import { IconContext } from 'react-icons';

import { CardHeader, CardDetails, CardFooter } from '../index';
import { CardProps } from '../../types/types';
import styled from 'styled-components';

//styled components
const CardBase = styled.div`
  border-radius: 3px;
  overflow: hidden;
  -webkit-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.1);
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.1);
  background-color: #fff;
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
          return (
            <IconContext.Provider
              key={el?.id}
              value={{
                style: { height: '2rem', width: '2rem', fill: '#55c57a' },
              }}
            >
              <CardBase>
                <CardHeader el={el} />
                <CardDetails el={el} />
                <CardFooter el={el} />
              </CardBase>
            </IconContext.Provider>
          );
        })}
    </>
  );
};
