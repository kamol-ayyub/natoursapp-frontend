import { FC, useEffect } from 'react';
import { Main, Card, CardContainer } from '../../../components';
import { useHttp } from '../../../hooks/index';
import { data } from '../../../mocks';

export const Home: FC = () => {
  const { sendRequest: getAllTours } = useHttp();

  useEffect(() => {
    getAllTours({
      url: '/api/v1/tours',
      method: 'GET',
    });
  }, []);

  return (
    <Main>
      <CardContainer>
        {/* {isError && <h1>Something went wrong, try again!</h1>} */}
        {/* {isLoading ? <Loading /> : <Card allTours={response?.data?.data} />} */}
        <Card allTours={data} />
      </CardContainer>
    </Main>
  );
};
