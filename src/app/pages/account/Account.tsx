import { FC, useContext } from 'react';
import {
  AccountPassword,
  AccountSidebar,
  AccountView,
} from '../../../components';
import { UserIsLoggedContext } from '../../../context/Context';

export const Account: FC = () => {
  const { logged } = useContext(UserIsLoggedContext);
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
