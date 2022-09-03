import { FC } from 'react';

const NotFound: FC = () => {
  return (
    <main className='main'>
      <div className='error'>
        <div className='error__title'>
          <h2 className='heading-secondary heading-secondary-error'>
            404 Page Not Found
          </h2>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
