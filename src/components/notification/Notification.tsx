import { FC } from 'react';
import { ErrorNotifType } from '../../types/types';
export const ErrorNotif: FC<ErrorNotifType> = ({ text, type }) => {
  return (
    <div>
      <h1 style={type === 'error' ? { color: 'red' } : { color: 'green' }}>
        {text}
      </h1>
    </div>
  );
};
