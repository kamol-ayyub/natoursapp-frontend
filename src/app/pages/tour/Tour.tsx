import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHttp } from '../../../hooks/index';
import { data } from '../../../mocks';

import { CustomHookType } from '../../../types/types';
import {
  Cta,
  TourHeader,
  Overview,
  Review,
  // Loading,
  // Main,
} from '../../../components';

export const Tour: FC = () => {
  const { tour } = useParams();
  const {
    // response,
    sendRequest: getTour,
  }: CustomHookType = useHttp();
  const sendRequest = async (): Promise<void> => {
    await getTour({
      url: `/api/v1/tours/${tour}`,
      method: 'GET',
    });
  };
  useEffect(() => {
    window.scroll(0, 0);
    sendRequest();
  }, []);
  const tourData: any = data.filter((el) => el._id === tour)[0];
  // if (isError) return <h1>Something went wrong! Try again!</h1>;
  // const tourData = response?.data?.data;
  return (
    <>
      {
        // isLoading ? (
        //   <Main>
        //     <Loading />
        //   </Main>
        // ) : (
        <>
          <TourHeader
            description={tourData?.startLocation.description}
            duration={tourData?.duration}
            imageCover={tourData?.imageCover}
            name={tourData?.name}
          />
          <Overview
            name={tourData?.name}
            description={tourData?.description}
            startDates={tourData?.startDates}
            difficulty={tourData?.difficulty}
            maxGroupSize={tourData?.maxGroupSize}
            ratingsAverage={tourData?.ratingsAverage}
            guides={tourData?.guides}
          />
          <Review data={tourData?.reviews} />
          <Cta
            images={tourData?.images}
            duration={tourData?.duration}
            tourId={tourData?._id}
          />
        </>
        // )
      }
    </>
  );
};
