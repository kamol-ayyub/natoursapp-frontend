import { FC, useState, useRef } from 'react';
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

export const ForgotPassword: FC = () => {
  //hooks

  const { response, sendRequest: sendRequestToResetPass } = useHttp();

  //states
  const [message, setMessage] = useState<string>('');
  const emailRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleEmail = async (e: FormEventType) => {
    e.preventDefault();
    const email: EmailAndPasswordType = emailRef.current?.value;

    await sendRequestToResetPass({
      url: '/api/v1/users/forgotPassword',
      method: 'POST',
      data: { email },
    });
  };

  return (
    <Main>
      <LoginForm>
        <HeadingSecondary MaBtLg>Enter your password</HeadingSecondary>
        <Form formRef={formRef} submitForm={handleEmail}>
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
