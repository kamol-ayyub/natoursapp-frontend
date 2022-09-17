import { FC } from 'react';
import {
  AccountPassword,
  AccountSidebar,
  AccountView,
} from '../../../components';

export const Account: FC = () => {
  return (
    <main className='main'>
      <div className='user-view'>
        <AccountSidebar />
        <AccountView>
          <AccountPassword />
        </AccountView>
      </div>
    </main>
  );
};
