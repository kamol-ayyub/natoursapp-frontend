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
import { clearMessage } from '@/utils/utils';

export const AccountPassword: FC = () => {
  const [message, setMessage] = useState<string>('');

  const token = localStorage.getItem('token');
  const currentPasswordRef = useRef<InputRefType>(null);
  const newPasswordRef = useRef<InputRefType>(null);
  const passwordConfRef = useRef<InputRefType>(null);
  const formRef = useRef<FormType>(null);

  const { response, sendRequest: sendRequestToResetPass } = useHttp();

  // function for request to backend
  const handleChangePassword = async (event: FormEventType) => {
    event.preventDefault();

    const passwordCurrent: RefValueType = currentPasswordRef.current?.value;
    const password: RefValueType = newPasswordRef.current?.value;
    const passwordConfirm: RefValueType = passwordConfRef.current?.value;

    if (passwordCurrent && password && passwordConfirm)
      await sendRequestToResetPass({
        url: `/api/v1/users/updateMyPassword`,
        method: 'PATCH',
        data: { passwordCurrent, password, passwordConfirm },
        headers: { Authorization: `Bearer ${token}` },
      });

    formRef.current?.reset();
  };

  useEffect(() => {
    if (response?.status === 'success') {
      setMessage(`You successfully changed your password!`);
      clearMessage(setMessage(''));
    } else if (response === false) {
      setMessage(`Password or password confirm is not valid!`);

      clearMessage(setMessage(''));
    }
  }, [response]);

  return (
    <>
      <UserViewFormContainer>
        <HeadingSecondary MaBtLg>Password change</HeadingSecondary>
        {
          <Notification
            text={message}
            type={
              !response || response?.status !== 'success' ? 'error' : 'success'
            }
          />
        }

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
