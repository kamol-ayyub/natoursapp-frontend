import React, { FC } from 'react';
import { Card } from '../../../components/home-card/Card';

export const Home: FC = () => {
  return (
    <main className='main'>
      <div className='card-container'>
        <Card />
      </div>
    </main>
  );
};
