import { FC } from 'react';
import { Error, HeadingSecondary, Main } from '@/components';

export const NotFound: FC = () => {
  return (
    <Main>
      <Error>
        <HeadingSecondary>404 Page Not Found.</HeadingSecondary>
      </Error>
    </Main>
  );
};
