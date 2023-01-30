import { FC, useState } from 'react';
import {
  Main,
  LoginForm,
  HeadingSecondary,
  Form,
  FormInput,
  Button,
} from '../../../components';
import { useHttp } from '../../../hooks';

import { FormEventType, OnChangeType } from '../../../types/types';

export const ForgotPassword: FC = () => {
  //hooks

  const { sendRequest: sendRequestToResetPass } = useHttp();

  //states
  const [email, setEmail] = useState<string>('');

  const handleEmail = (e: OnChangeType) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = async (e: FormEventType): Promise<void> => {
    e.preventDefault();

    await sendRequestToResetPass({
      url: '/api/v1/users/forgotPassword',
      method: 'POST',
      data: { email },
    });
    setEmail('');
  };

  return (
    <Main>
      <LoginForm>
        <HeadingSecondary MaBtLg>Enter your password</HeadingSecondary>
        <Form submitForm={handleResetPassword}>
          <FormInput
            inputType='email'
            label='Email address'
            placeholder='you@example.com'
            HTMLFor='email'
            onchange={handleEmail}
          ></FormInput>
          <Button GreenBtn>Send</Button>
        </Form>
      </LoginForm>
    </Main>
  );
};
