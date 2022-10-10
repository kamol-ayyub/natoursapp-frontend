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

export const ForgotPassword: FC = () => {
  //hooks

  const { response, sendRequest: sendRequestToResetPass } = useHttp();

  //states
  const [message, setMessage] = useState<string>('');
  const emailRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const resetPassword = async (e: FormEventType) => {
    e.preventDefault();
    const email: EmailAndPasswordType = emailRef.current?.value;
    console.log(email, 'email value');

    await sendRequestToResetPass({
      url: '/api/v1/users/forgotPassword',
      method: 'POST',
      data: { email },
    });
  };

  useEffect(() => {
    console.log(response, 'response in forgot password page');
  }, [response]);

  return (
    <Main>
      <LoginForm>
        <HeadingSecondary MaBtLg>Reset password</HeadingSecondary>
        <Form formRef={formRef} submitForm={resetPassword}>
          <FormInput
            inputType='email'
            label='Email address'
            placeholder='you@example.com'
            ref={emailRef}
          ></FormInput>
          <Button GreenBtn>Send</Button>
        </Form>
      </LoginForm>
    </Main>
  );
};