import { FC, useRef } from 'react';

const Signup: FC = () => {
  // refs for get data from form
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const passwordConfirm = useRef<HTMLInputElement>(null);

  // function for request to backend
  const handleSignup = () => {
    console.log(
      email.current?.value,
      name.current?.value,
      password.current?.value,
      passwordConfirm.current?.value
    );
  };
  return (
    <main className='main'>
      <div className='login-form'>
        <h2 className='heading-secondary ma-bt-lg'>CREATE YOUR ACCOUNT!</h2>
        <div className='form form--signup'>
          <div className='form__group'>
            <label htmlFor='name' className='form__label'>
              Your name
            </label>
            <input
              className=' form__input'
              id='name'
              type='text'
              placeholder='your name'
              required
              ref={name}
            />
          </div>
          <div className='form__group'>
            <label htmlFor='email' className='form__label'>
              Email address
            </label>
            <input
              className='email form__input'
              type='email'
              placeholder='you@example.com'
              required
              ref={email}
            />
          </div>
          <div className='form__group ma-bt-md'>
            <label htmlFor='password' className='form__label'>
              Password
            </label>
            <input
              id='password'
              className='password form__input'
              type='password'
              placeholder='••••••••'
              required
              ref={password}
            />
          </div>
          <div className='form__group ma-bt-md'>
            <label htmlFor='passwordConfirm' className='form__label'>
              Confirm password
            </label>
            <input
              id='passwordConfirm'
              className='password form__input'
              type='password'
              placeholder='••••••••'
              required
              ref={passwordConfirm}
            />
          </div>
          <div className='form__group'>
            <button onClick={handleSignup} className='btn btn--green'>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
