import { FC, useRef } from 'react';
import FormInput from '../../../components/input/EmailInput';

export const Login: FC = () => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const handleLogin = (e: any) => {
    e.preventDefault();
    console.log(email.current?.value, password.current?.value);
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
            <button type='submit' className='btn btn--green'>
              Login
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};
