import { FC, useRef, useState, useEffect } from 'react';
import useHttp from '@/hooks/use-http';
import {
  Notification,
  Form,
  FormGroup,
  FormInput,
  HeadingSecondary,
  UserViewFormContainer,
  Button,
} from '..';
import {
  RefValueType,
  FormEventType,
  InputRefType,
  FormType,
} from '@/types/types';

export const AccountPassword: FC = () => {
  const [message, setMessage] = useState<string>('');
  const token: string = 'vhdfd';

  const currentPasswordRef = useRef<InputRefType>(null);
  const newPasswordRef = useRef<InputRefType>(null);
  const passwordConfRef = useRef<InputRefType>(null);
  const formRef = useRef<FormType>(null);

  const { response, sendRequest: sendRequestToResetPass } = useHttp();

  // function for request to backend
  const handleChangePassword = async (event: FormEventType) => {
    event.preventDefault();

    const passwordCurrent: RefValueType = currentPasswordRef.current?.value;
    const newPassword: RefValueType = newPasswordRef.current?.value;
    const passwordConfirm: RefValueType = passwordConfRef.current?.value;

    if (passwordCurrent && newPassword && passwordConfirm)
      await sendRequestToResetPass({
        url: `/api/v1/users/resetPassword/:${token}`,
        method: 'PATCH',
        data: { passwordCurrent, newPassword, passwordConfirm },
        headers: { Authorization: `Bearer ${token}` },
      });
  };

  useEffect(() => {
    if (response?.status === 'success') {
      setMessage(`You successfully changed your password!`);
      setTimeout(() => {
        setMessage('');
      }, 3000);
      formRef.current?.reset();
    } else if (response === 'fail') {
      setMessage(`Password or password confirm is not valid!`);
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  }, [response]);

  return (
    <>
      <UserViewFormContainer>
        <HeadingSecondary MaBtLg>Password change</HeadingSecondary>
        {message && (
          <Notification
            text={message}
            type={response?.status === 'success' ? 'success' : 'error'}
          />
        )}

        <Form submitForm={handleChangePassword} formRef={formRef}>
          <FormInput
            label='Current password'
            inputType='password'
            ref={currentPasswordRef}
            placeholder='••••••••'
            required
          />
          <FormInput
            label='New password'
            inputType='password'
            ref={newPasswordRef}
            required
            placeholder='••••••••'
          />
          <FormInput
            label='Confirm password'
            inputType='password'
            ref={passwordConfRef}
            required
            placeholder='••••••••'
          />
          <FormGroup right>
            <Button SmallBtn GreenBtn>
              Save password
            </Button>
          </FormGroup>
        </Form>
      </UserViewFormContainer>
    </>
  );
};
