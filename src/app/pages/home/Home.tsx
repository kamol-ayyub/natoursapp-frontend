import React, { FC, useLayoutEffect } from 'react';
import { Card } from '../../../components/home-card/Card';
import useHttp from '../../../hooks/use-http';

export const Home: FC = () => {
  const { response, sendRequest: getAllTours, isError } = useHttp();

  const getTours = async () => {
    await getAllTours({
      url: '/api/v1/tours',
      method: 'GET',
    });
  };

  useLayoutEffect(() => {
    getTours();
  }, []);

  return (
    <main className='main'>
      <div className='card-container'>
        {isError && <h1>Something went wrong, try again!</h1>}
        <Card allTours={response?.data?.data} />
      </div>
    </main>
  );
};
