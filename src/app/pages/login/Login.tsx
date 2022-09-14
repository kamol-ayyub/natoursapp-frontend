import { FC, useRef, useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../../../components/input/EmailInput';
import useHttp from '../../../hooks/use-http';
import { ErrorNotif } from '../../../components/notification/Notification';

import { UserIsLoggedContext } from '../../../context/Context';

//types
type EmailAndPasswordType = String | undefined;

export const Login: FC = () => {
  const [message, setMessage] = useState<string>('');
  const { setLogged } = useContext(UserIsLoggedContext);
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  //
  const { response, sendRequest: sendrequestToLogin, isError } = useHttp();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const email: EmailAndPasswordType = emailRef.current?.value;
    const password: EmailAndPasswordType = passwordRef.current?.value;

    await sendrequestToLogin({
      url: '/api/v1/users/login',
      method: 'POST',
      data: { email, password },
    });
    e.target.reset();
  };
  const changeIsLogged = () => {
    setLogged(true);
  };
  const clearMsg = () => {
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };
  useEffect(() => {
    if (response?.status === 'success') {
      changeIsLogged();
      localStorage.setItem('token', response?.token);
      setTimeout(() => {
        navigate('/me', { replace: true });
      }, 10);
    } else {
      setMessage(`Email or password is not valid!`);
      clearMsg();
    }
  }, [response]);

  return (
    <>
      <main className='main'>
        <div className='login-form'>
          <h2 className='heading-secondary ma-bt-lg'>Log into your account</h2>
          <ErrorNotif text={message} />
          <form onSubmit={handleLogin} className='form form--login'>
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

            <div className='form__group'>
              <button type='submit' className='btn btn--green'>
                Login
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};
