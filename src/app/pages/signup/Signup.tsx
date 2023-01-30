import { FC, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  InputRefType,
  FormType,
  FormEventType,
  OnChangeType,
} from '@/types/types';
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
  const [signupFormData, setsignupFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  // function for request to backend
  const handleSignup = async (event: FormEventType) => {
    event.preventDefault();
    const { name, email, password, passwordConfirm } = signupFormData;

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
  };
  const handleSignupFormData = (e: OnChangeType) => {
    setsignupFormData({ ...signupFormData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (response?.status === 'success') {
      setsignupFormData({
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
      });
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
        <Form submitForm={handleSignup}>
          <FormInput
            label='Your name'
            placeholder='your name'
            inputType='text'
            required
            onchange={handleSignupFormData}
            HTMLFor='name'
          />
          {nameAlertMsg && (
            <h2 style={{ color: 'red', margin: '20px 0' }}>{nameAlertMsg}</h2>
          )}
          <FormInput
            label='Email address'
            placeholder='you@example.com'
            inputType='email'
            required
            onchange={handleSignupFormData}
            HTMLFor='email'
          />
          <FormInput
            label='Password'
            placeholder='••••••••'
            inputType='password'
            MaBtMd
            required
            onchange={handleSignupFormData}
            HTMLFor='password'
          />
          <FormInput
            label='Confirm password'
            placeholder='••••••••'
            inputType='password'
            MaBtMd
            required
            onchange={handleSignupFormData}
            HTMLFor='passwordConfirm'
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
