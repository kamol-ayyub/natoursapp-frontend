import { FC, useRef } from 'react';
import FormInput from '../../../components/input/EmailInput';

export const Login: FC = () => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const handleLogin = () => {
    console.log(email.current?.value, password.current?.value);
  };

  return (
    <main className='main'>
      <div className='login-form'>
        <h2 className='heading-secondary ma-bt-lg'>Log into your account</h2>
        <div className='form form--login'>
          <FormInput
            label='Email address'
            placeholder='you@example.com'
            inputType='email'
            formClass='form__group'
            ref={email}
          />

          <FormInput
            label='Password'
            ref={password}
            placeholder='••••••••'
            inputType='password'
            formClass='form__group ma-bt-md'
          />

          <div className='form__group'>
            <button onClick={handleLogin} className='btn btn--green'>
              Login
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
