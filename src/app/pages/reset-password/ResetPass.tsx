import { FC, useState, useRef, ChangeEvent } from 'react';
import {
  Main,
  LoginForm,
  HeadingSecondary,
  Form,
  FormInput,
  Button,
} from '@/components';
import useHttp from '@/hooks/use-http';
import { FormEventType, EmailAndPasswordType } from '@/types/types';

export const ResetPass: FC = () => {
  //hooks

  const { response, sendRequest: sendRequestToResetPass } = useHttp();

  //states
  const [message, setMessage] = useState<string>('');
  const [formData, setformData] = useState({
    password: '',
    passwordConfirm: '',
  });
  const formRef = useRef<HTMLFormElement>(null);

  const handleCatchData = (e: ChangeEvent<HTMLInputElement>) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const resetPassword = async (e: FormEventType) => {
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
        <Form formRef={formRef} submitForm={resetPassword}>
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
