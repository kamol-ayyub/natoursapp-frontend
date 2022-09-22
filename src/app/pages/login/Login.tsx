import { FC, useRef, useEffect, useContext, useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import useHttp from '../../../hooks/use-http';
import {
  ErrorNotif,
  FormInput,
  Form,
  Main,
  FormGroup,
  LoginForm,
  HeadingSecondary,
} from '../../../components';
import { EmailAndPasswordType } from '../../../types/types';
import { UserIsLoggedContext } from '../../../context/Context';

export const Login: FC = () => {
  const [message, setMessage] = useState<string | null>(null);
  const { setLogged } = useContext(UserIsLoggedContext);
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  //
  const { response, sendRequest: sendrequestToLogin } = useHttp();
  const formRef = useRef<HTMLFormElement>(null);

  const handleLogin = async (e: FormEvent) => {
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

  const clearMsg = (): void => {
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };
  useEffect(() => {
    if (response?.status === 'success') {
      setLogged(true);
      localStorage.setItem('token', response?.token);
      setTimeout(() => {
        navigate('/me', { replace: true });
      }, 1000);
    } else if (response === false) {
      setMessage(`Incorrect email or password!`);
      clearMsg();
    }
  }, [response]);

  return (
    <>
      <Main>
        <LoginForm>
          <HeadingSecondary MaBtLg>Log into your account</HeadingSecondary>
          {message && <ErrorNotif text={message} type='error' />}
          <Form
            formRef={formRef}
            submitForm={handleLogin}
            className='form form--login'
          >
            <FormInput
              label='Email address'
              placeholder='you@example.com'
              inputType='email'
              formClass='form__group'
              ref={emailRef}
              required
            />

            <FormInput
              label='Password'
              ref={passwordRef}
              placeholder='••••••••'
              inputType='password'
              formClass='form__group ma-bt-md'
              required
            />

            <FormGroup>
              <button type='submit' className='btn btn--green'>
                Login
              </button>
            </FormGroup>
          </Form>
        </LoginForm>
      </Main>
    </>
  );
};
