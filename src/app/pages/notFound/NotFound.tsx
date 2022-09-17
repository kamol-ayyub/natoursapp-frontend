import { FC } from 'react';

export const NotFound: FC = () => {
  return (
    <main className='main'>
      <div className='error'>
        <div className='error__title'>
          <h1 className='heading-secondary heading-secondary-error'>
            404 Page Not Found
          </h1>
        </div>
      </div>
    </main>
  );
};
