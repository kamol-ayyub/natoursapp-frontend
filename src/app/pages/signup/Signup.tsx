import { FC, useRef, useState, useEffect, useContext, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputRefType, FormType, FormEventType } from '@/types/types';
import {
  Form,
  FormGroup,
  FormInput,
  HeadingSecondary,
  LoginForm,
  Main,
  Button,
} from '@/components';
import useHttp from '@/hooks/use-http';
import { UserIsLoggedContext } from '@/context/Context';

export const Signup: FC = () => {
  const navigate = useNavigate();
  const [passwordAlertMsg, setpasswordAlertMsg] = useState<string>('');
  const [nameAlertMsg, setNameAlertMsg] = useState<string>('');
  const { setLogged } = useContext(UserIsLoggedContext);

  // destructuring custom hook
  const { response, sendRequest: sendRequestToSignup } = useHttp();
  // refs for get data from form
  const nameRef = useRef<InputRefType>(null);
  const emailRef = useRef<InputRefType>(null);
  const passwordRef = useRef<InputRefType>(null);
  const passwordConfirmRef = useRef<InputRefType>(null);
  const formRef = useRef<FormType>(null);

  // function for request to backend
  const handleSignup = async (event: FormEventType) => {
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
    }
    if (password !== passwordConfirm) {
      setpasswordAlertMsg('Password and Password Confirm must be similar!');
      setTimeout(() => {
        setpasswordAlertMsg('');
      }, 4000);
    }
    await sendRequestToSignup({
      url: '/api/v1/users/signup',
      method: 'POST',
      data: { name, email, password, passwordConfirm },
    });
    formRef.current?.reset();
  };

  useEffect(() => {
    if (response?.status === 'success') {
      setLogged(true);
      setTimeout(() => {
        navigate('/me', { replace: true });
      }, 0);
    }
  }, [response]);

  return (
    <Main>
      <LoginForm>
        <HeadingSecondary MaBtLg={true}>CREATE YOUR ACCOUNT!</HeadingSecondary>
        <Form formRef={formRef} submitForm={handleSignup}>
          <FormInput
            label='Your name'
            placeholder='your name'
            inputType='text'
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
            ref={emailRef}
            required
          />
          <FormInput
            label='Password'
            ref={passwordRef}
            placeholder='••••••••'
            inputType='password'
            MaBtMd
            required
          />
          <FormInput
            label='Confirm password'
            ref={passwordConfirmRef}
            placeholder='••••••••'
            inputType='password'
            MaBtMd
            required
          />
          {passwordAlertMsg && (
            <h2 style={{ color: 'red', margin: '20px 0' }}>
              {passwordAlertMsg}
            </h2>
          )}
          <FormGroup>
            <Button GreenBtn>Sign up</Button>
          </FormGroup>
        </Form>
      </LoginForm>
    </Main>
  );
};
