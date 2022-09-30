import { FC, useRef, useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useHttp from '../../../hooks/use-http';
import {
  Notification,
  FormInput,
  Form,
  Main,
  FormGroup,
  LoginForm,
  HeadingSecondary,
  Button,
} from '@/components';
import { EmailAndPasswordType, FormEventType } from '@/types/types';
import { UserIsLoggedContext } from '@/context/Context';
import { clearMessage } from '@/utils/utils';

export const Login: FC = () => {
  const [message, setMessage] = useState<string>('');
  const { setLogged } = useContext(UserIsLoggedContext);
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  //
  const { isLoading, response, sendRequest: sendrequestToLogin } = useHttp();
  const formRef = useRef<HTMLFormElement>(null);

  const handleLogin = async (e: FormEventType) => {
    e.preventDefault();
    const email: EmailAndPasswordType = emailRef.current?.value;
    const password: EmailAndPasswordType = passwordRef.current?.value;

    await sendrequestToLogin({
      url: '/api/v1/users/login',
      method: 'POST',
      data: { email, password },
    });
    formRef.current?.reset();
  };

  useEffect(() => {
    if (response?.status === 'success') {
      setLogged(true);
      localStorage.setItem('token', response?.token);
      setMessage('You successfully logged in');
      setTimeout(() => {
        navigate('/me', { replace: true });
      }, 2000);
    } else if (response === false) {
      setMessage(`Incorrect email or password!`);
      clearMessage(setMessage(''));
    }
  }, [response]);

  return (
    <>
      <Main>
        <LoginForm>
          <HeadingSecondary MaBtLg>Log into your account</HeadingSecondary>
          {
            <Notification
              text={message}
              type={
                !response || response?.status !== 'success'
                  ? 'error'
                  : 'success'
              }
            />
          }
          <Form formRef={formRef} submitForm={handleLogin}>
            <FormInput
              label='Email address'
              placeholder='you@example.com'
              inputType='email'
              ref={emailRef}
              required
            />

            <FormInput
              label='Password'
              ref={passwordRef}
              placeholder='••••••••'
              inputType='password'
              MaBtMd
              required
            />

            <FormGroup>
              <Button GreenBtn>Login</Button>
            </FormGroup>
          </Form>
        </LoginForm>
      </Main>
    </>
  );
};
