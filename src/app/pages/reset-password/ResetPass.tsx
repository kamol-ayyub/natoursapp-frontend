import { FC, useState } from 'react';
import {
  Main,
  LoginForm,
  HeadingSecondary,
  Form,
  FormInput,
  Button,
} from '@/components';
import { useHttp } from '@/hooks/index';

import { FormEventType, OnChangeType } from '@/types/types';

export const ResetPass: FC = () => {
  //hooks

  const { sendRequest: sendRequestToResetPass } = useHttp();

  //states
  const [formData, setformData] = useState({
    password: '',
    passwordConfirm: '',
  });

  const handleCatchData = (e: OnChangeType) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetPassword = async (e: FormEventType): Promise<void> => {
    e.preventDefault();
    const { password } = formData;
    await sendRequestToResetPass({
      url: '/api/v1/users/resetPassword',
      method: 'POST',
      data: { password },
    });
    setformData({
      password: '',
      passwordConfirm: '',
    });
  };

  return (
    <Main>
      <LoginForm>
        <HeadingSecondary MaBtLg>Reset password</HeadingSecondary>
        <Form submitForm={resetPassword}>
          <FormInput
            inputType='password'
            label='Password'
            placeholder='••••••••'
            onchange={handleCatchData}
            MaBtMd
            HTMLFor={`
              password
            `}
          ></FormInput>
          <FormInput
            inputType='password'
            label='Confirm password'
            placeholder='••••••••'
            onchange={handleCatchData}
            HTMLFor={`
            passwordConfirm
          `}
          ></FormInput>
          <Button GreenBtn>Send</Button>
        </Form>
      </LoginForm>
    </Main>
  );
};
