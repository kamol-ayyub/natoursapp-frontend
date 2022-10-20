import { FC, useState, useRef, useEffect } from 'react';
import {
  Main,
  Notification,
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
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);

  const formRef = useRef<HTMLFormElement>(null);

  const resetPassword = async (e: FormEventType) => {
    e.preventDefault();
    const password: EmailAndPasswordType = passwordRef.current?.value;
    console.log(password, 'email value');

    await sendRequestToResetPass({
      url: '/api/v1/users/resetPassword',
      method: 'POST',
      data: { password },
    });
  };

  useEffect(() => {
    console.log(response, 'response in reset password page');
  }, [response]);

  return (
    <Main>
      <LoginForm>
        <HeadingSecondary MaBtLg>Reset password</HeadingSecondary>
        <Form formRef={formRef} submitForm={resetPassword}>
          <FormInput
            inputType='password'
            label='Password'
            placeholder='••••••••'
            ref={passwordRef}
            MaBtMd
          ></FormInput>
          <FormInput
            inputType='password'
            label='Confirm password'
            placeholder='••••••••'
            ref={passwordConfirmRef}
          ></FormInput>
          <Button GreenBtn>Send</Button>
        </Form>
      </LoginForm>
    </Main>
  );
};
