import { FC, useEffect } from 'react';
import { Main, Card, CardContainer } from '@/components';

import useHttp from '@/hooks/use-http';

export const Home: FC = () => {
  const { response, sendRequest: getAllTours, isError } = useHttp();

  useEffect(() => {
    getAllTours({
      url: '/api/v1/tours',
      method: 'GET',
    });
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
