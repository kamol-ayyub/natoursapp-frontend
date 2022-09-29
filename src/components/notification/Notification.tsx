import { FC } from 'react';
import { ErrorNotifType } from '../../types/types';
export const Notification: FC<ErrorNotifType> = ({ text, type }) => {
  if (!text) {
    return null;
  }
  return (
    <div>
      <h1 style={type === 'error' ? { color: 'red' } : { color: 'green' }}>
        {text}
      </h1>
    </div>
  );
};
