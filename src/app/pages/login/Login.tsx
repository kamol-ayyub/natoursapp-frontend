import { FC, useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHttp } from '@/hooks/index';

import {
  Notification,
  FormInput,
  Form,
  Main,
  FormGroup,
  LoginForm,
  HeadingSecondary,
  Button,
  RouteLink,
} from '@/components';
import { FormEventType, OnChangeType } from '@/types/types';
import { UserIsLoggedContext } from '@/context/Context';

export const Login: FC = () => {
  const [message, setMessage] = useState<string>('');
  const [showForgotPassword, setShowForgotPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { setLogged } = useContext(UserIsLoggedContext);
  const navigate = useNavigate();

  //
  const { response, sendRequest: sendrequestToLogin } = useHttp();

  const handleLogin = async (e: FormEventType): Promise<void> => {
    e.preventDefault();
    const { email, password } = formData;

    await sendrequestToLogin({
      url: '/api/v1/users/login',
      method: 'POST',
      data: { email, password },
    });
    setFormData({
      email: '',
      password: '',
    });
  };

  const handleFormData = (e: OnChangeType) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (response?.status === 'success') {
      setLogged(true);
      localStorage.setItem('token', response?.token);
      setMessage('You successfully logged in');
      setTimeout(() => {
        navigate('/me', { replace: true });
      }, 2000);
    } else if (response === 'fail') {
      setShowForgotPassword(true);
      setMessage(`Incorrect email or password!`);
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  }, [response]);

  return (
    <>
      <Main>
        <LoginForm>
          <HeadingSecondary MaBtLg>Log into your account</HeadingSecondary>
          {message && (
            <Notification
              text={message}
              type={response?.status === 'success' ? 'success' : 'error'}
            />
          )}

          <Form submitForm={handleLogin}>
            <FormInput
              label='Email address'
              placeholder='you@example.com'
              inputType='email'
              required
              HTMLFor='email'
              onchange={handleFormData}
            />

            <FormInput
              label='Password'
              placeholder='••••••••'
              inputType='password'
              MaBtMd
              required
              HTMLFor='password'
              onchange={handleFormData}
            />

            <FormGroup>
              <Button GreenBtn>Login</Button>
            </FormGroup>
            {showForgotPassword && (
              <Button GreenBtn>
                <RouteLink navel to={'/frgtpass'}>
                  Forgot password?
                </RouteLink>
              </Button>
            )}
          </Form>
        </LoginForm>
      </Main>
    </>
  );
};
