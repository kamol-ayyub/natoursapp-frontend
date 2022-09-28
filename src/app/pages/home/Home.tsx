import { FC, useLayoutEffect } from 'react';
import { Main, Card, CardContainer } from '../../../components';

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
    <Main>
      <CardContainer>
        {isError && <h1>Something went wrong, try again!</h1>}
        <Card allTours={response?.data?.data} />
      </CardContainer>
    </Main>
  );
};
