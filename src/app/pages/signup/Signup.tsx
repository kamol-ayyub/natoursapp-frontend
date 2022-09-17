import { FC, useRef, useState, useEffect, useContext } from 'react';
import FormInput from '../../../components/input/EmailInput';
import useHttp from '../../../hooks/use-http';
import { useNavigate } from 'react-router-dom';
import { UserIsLoggedContext } from '../../../context/Context';

export const Signup: FC = () => {
  const navigate = useNavigate();
  const [passwordAlertMsg, setpasswordAlertMsg] = useState<string>('');
  const [nameAlertMsg, setNameAlertMsg] = useState<string>('');
  const { setLogged } = useContext(UserIsLoggedContext);

  // destructuring custom hook
  const { response, sendRequest: sendRequestToSignup, isError } = useHttp();
  // refs for get data from form
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);

  // function for request to backend
  const handleSignup = async (event: any) => {
    event.preventDefault();
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const passwordConfirm = passwordConfirmRef.current?.value;

    if (!name?.match(/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/)) {
      setNameAlertMsg('Name must consist of Latin letters or numbers!');
      setTimeout(() => {
        setNameAlertMsg('');
      }, 4000);
    } else if (password !== passwordConfirm) {
      setpasswordAlertMsg('Password and Password Confirm must be similar!');
      setTimeout(() => {
        setpasswordAlertMsg('');
      }, 4000);
    } else {
      await sendRequestToSignup({
        url: '/api/v1/users/signup',
        method: 'POST',
        data: { name, email, password, passwordConfirm },
      });
      event.target.reset();
    }
  };

  useEffect(() => {
    if (response?.status === 'success') {
      setLogged(true);
      setTimeout(() => {
        navigate('/me', { replace: true });
      }, 0);
    }
  }, [response]);

  console.log('rendered');
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
            ref={nameRef}
            required
          />
          {nameAlertMsg && (
            <h2 style={{ color: 'red', margin: '20px 0' }}>{nameAlertMsg}</h2>
          )}
          <FormInput
            label='Email address'
            placeholder='you@example.com'
            inputType='email'
            formClass='form--signup'
            ref={emailRef}
            required
          />
          <FormInput
            label='Password'
            ref={passwordRef}
            placeholder='••••••••'
            inputType='password'
            formClass='form--signup ma-bt-md'
            required
          />
          <FormInput
            label='Confirm password'
            ref={passwordConfirmRef}
            placeholder='••••••••'
            inputType='password'
            formClass='form--signup ma-bt-md'
            required
          />
          {passwordAlertMsg && (
            <h2 style={{ color: 'red', margin: '20px 0' }}>
              {passwordAlertMsg}
            </h2>
          )}
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
