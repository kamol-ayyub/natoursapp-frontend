import { FC, useRef, useState } from 'react';
import FormInput from '../../../components/input/EmailInput';
import useHttp from '../../../hooks/use-http';
type EmailAndPasswordType = String | undefined;

export const Login: FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [data, setData] = useState(null);
  //
  const {
    error,
    isLoading,
    isSuccess,
    response,
    sendRequest: sendLoginrequest,
  } = useHttp();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    const email: EmailAndPasswordType = emailRef.current?.value;
    const password: EmailAndPasswordType = passwordRef.current?.value;

    await sendLoginrequest({
      url: '/api/v1/users/login',
      method: 'POST',
      data: { email, password },
    });

    // console.log(responseFromLogin, 'response from backend');
    console.log(isSuccess, response, isLoading, 'isLoading');
    e.target.reset();
  };

  return (
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
  );
};
