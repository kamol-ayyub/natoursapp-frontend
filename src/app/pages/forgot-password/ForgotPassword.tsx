import { FC } from 'react';
import {
  Main,
  Notification,
  LoginForm,
  HeadingSecondary,
  Form,
  FormInput,
  Button,
} from '@/components';

export const ForgotPassword: FC = () => {
  return (
    <Main>
      <LoginForm>
        <HeadingSecondary MaBtLg>Reset password</HeadingSecondary>

        <Form>
          <FormInput
            inputType='text'
            label='Email address'
            placeholder='you@example.com'
          ></FormInput>
          <Button GreenBtn>Send</Button>
        </Form>
      </LoginForm>
    </Main>
  );
};
