import { FC, useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Cta } from '../../../components/cta/Cta';
import { TourHeader } from '../../../components/tour-header/TourHeader';
import Overview from '../../../components/overview/Overview';
import { Review } from '../../../components/review/Review';
import useHttp from '../../../hooks/use-http';
import { CustomHookType } from '../../../types/types';

export const Tour: FC = () => {
  const { tour } = useParams();
  const { response, sendRequest: getTour, isError }: CustomHookType = useHttp();
  const sendRequest = async () => {
    await getTour({
      url: `/api/v1/tours/${tour}`,
      method: 'GET',
    });
  };
  useLayoutEffect(() => {
    sendRequest();
  }, [tour]);

  if (isError) return <h1>Something went wrong! Try again!</h1>;
  return (
    <>
      <TourHeader data={response?.data?.data} />
      <Overview
        name={response?.data?.data.name}
        description={response?.data?.data.description}
        startDates={response?.data?.data?.startDates}
        difficulty={response?.data?.data?.difficulty}
        maxGroupSize={response?.data?.data?.maxGroupSize}
        ratingsAverage={response?.data?.data?.ratingsAverage}
        guides={response?.data?.data?.guides}
      />
      <Review data={response?.data?.data?.reviews} />
      <Cta
        images={response?.data?.data?.images}
        duration={response?.data?.data?.duration}
      />
    </>
  );
};
