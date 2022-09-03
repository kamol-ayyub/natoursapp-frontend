import { FC } from 'react';

export const Login: FC = () => {
  return (
    <main className='main'>
      <div className='login-form'>
        <h2 className='heading-secondary ma-bt-lg'>Log into your account</h2>
        <div className='form form--login'>
          <div className='form__group'>
            <label htmlFor='email' className='form__label'>
              Email address
            </label>
            <input
              className='email form__input'
              type='email'
              placeholder='you@example.com'
              required
            />
          </div>
          <div className='form__group ma-bt-md'>
            <label htmlFor='password' className='form__label'>
              Password
            </label>
            <input
              className='password form__input'
              type='password'
              placeholder='••••••••'
              required
            />
          </div>
        </div>
      </div>
    </main>
  );
};
