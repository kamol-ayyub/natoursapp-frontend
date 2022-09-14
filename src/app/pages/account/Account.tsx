import { FC, useContext } from 'react';
import { AccountPassword } from '../../../components/account-password/AccountPassword';
import { AccountSidebar } from '../../../components/account-sidebar/AccountSidebar';
import { AccountView } from '../../../components/account-view/AccountView';
import { UserIsLoggedContext } from '../../../context/Context';

const Account: FC = () => {
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
export default Account;
