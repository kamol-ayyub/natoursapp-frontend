import { FC, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../../../components/input/EmailInput';
import useHttp from '../../../hooks/use-http';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//types
type EmailAndPasswordType = String | undefined;

export const Login: FC = () => {
  const navigate = useNavigate();
  const notify = (text: any) => {
    toast(text);
  };
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

  useEffect(() => {
    console.log(response);
    if (response?.status === 'success') {
      setTimeout(() => {
        navigate('/me', { replace: true });
      }, 0);
    } else {
      notify('Incorrect email or password!');
    }
  }, [response]);

  return (
    <>
      {isError && <ToastContainer />}

      <main className='main'>
        <div className='login-form'>
          <h2 className='heading-secondary ma-bt-lg'>Log into your account</h2>
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
