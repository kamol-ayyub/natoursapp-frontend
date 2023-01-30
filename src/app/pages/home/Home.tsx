import { FC, useEffect } from 'react';
import { Main, Card, CardContainer, Loading } from '../../../components';
import { useHttp } from '../../../hooks/index';

export const Home: FC = () => {
  const { response, sendRequest: getAllTours, isError, isLoading } = useHttp();

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
        {isLoading ? <Loading /> : <Card allTours={response?.data?.data} />}
      </CardContainer>
    </Main>
  );
};
