import { FC, useRef } from 'react';
import FormInput from '../../../components/input/EmailInput';

const Signup: FC = () => {
  // refs for get data from form
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const passwordConfirm = useRef<HTMLInputElement>(null);

  // function for request to backend
  const handleSignup = (event: any) => {
    event.preventDefault();
    console.log(
      email.current?.value,
      name.current?.value,
      password.current?.value,
      passwordConfirm.current?.value
    );
    event.target.reset();
  };
  return (
    <main className='main'>
      <div className='login-form'>
        <h2 className='heading-secondary ma-bt-lg'>CREATE YOUR ACCOUNT!</h2>
        <form onSubmit={handleSignup} className='form form--signup'>
          <FormInput
            label='Your name'
            placeholder='your name'
            inputType='text'
            formClass='form--signup'
            ref={name}
          />
          <FormInput
            label='Email address'
            placeholder='you@example.com'
            inputType='email'
            formClass='form--signup'
            ref={email}
          />
          <FormInput
            label='Password'
            ref={password}
            placeholder='••••••••'
            inputType='password'
            formClass='form--signup ma-bt-md'
          />
          <FormInput
            label='Confirm password'
            ref={passwordConfirm}
            placeholder='••••••••'
            inputType='password'
            formClass='form--signup ma-bt-md'
          />
          <div className='form__group'>
            <button type='submit' className='btn btn--green'>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Signup;
