import { FC, useContext } from 'react';
import {
  AccountPassword,
  AccountSidebar,
  AccountView,
  Main,
  UserView,
} from '../../../components';
import { UserIsLoggedContext } from '../../../context/Context';

export const Account: FC = () => {
  // const { logged, setLogged } = useContext(UserIsLoggedContext);
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
