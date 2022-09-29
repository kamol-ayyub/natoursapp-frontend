import { FC } from 'react';
import {
  AccountPassword,
  AccountSidebar,
  AccountView,
  Main,
  UserView,
} from '../../../components';

export const Account: FC = () => {
  return (
    <Main>
      <UserView>
        <AccountSidebar />
        <AccountView>
          <AccountPassword />
        </AccountView>
      </UserView>
    </Main>
  );
};
