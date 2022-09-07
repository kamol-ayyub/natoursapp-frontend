import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Cta } from '../../../components/cta/Cta';
import { TourHeader } from '../../../components/tour-header/TourHeader';
import Overview from '../../../components/overview/Overview';
import { Review } from '../../../components/review/Review';
import useHttp from '../../../hooks/use-http';

const Tour: FC = () => {
  const { tour } = useParams();
  const { response, sendRequest: getTour, isError } = useHttp();
  const sendRequest = async () => {
    await getTour({
      url: `/api/v1/tours/${tour}`,
      method: 'GET',
    });
  };
  useEffect(() => {
    sendRequest();
  }, [tour]);

  if (isError) return <h1>SOmething went wrong! Try again!</h1>;
  return (
    <>
      <TourHeader data={response?.data?.data} />
      <Overview />
      <Review />
      <Cta />
    </>
  );
};

export default Tour;
