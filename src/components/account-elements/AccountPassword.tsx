import { FC, useState, useEffect } from 'react';
import { useHttp } from '@/hooks/index';

import {
  Notification,
  Form,
  FormGroup,
  FormInput,
  HeadingSecondary,
  UserViewFormContainer,
  Button,
} from '..';
import { FormEventType, OnChangeType } from '@/types/types';

export const AccountPassword: FC = () => {
  const [message, setMessage] = useState<string>('');
  const token: string = 'vhdfd';
  const [formData, setFormData] = useState({
    passwordCurrent: '',
    newPassword: '',
    passwordConfirm: '',
  });

  const { response, sendRequest: sendRequestToResetPass } = useHttp();

  // function for request to backend
  const handleChangePassword = async (event: FormEventType) => {
    event.preventDefault();

    const { passwordCurrent, newPassword, passwordConfirm } = formData;

    if (passwordCurrent && newPassword && passwordConfirm)
      await sendRequestToResetPass({
        url: `/api/v1/users/resetPassword/:${token}`,
        method: 'PATCH',
        data: { passwordCurrent, newPassword, passwordConfirm },
        headers: { Authorization: `Bearer ${token}` },
      });
  };
  const handleFormData = (e: OnChangeType) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (response?.status === 'success') {
      setMessage(`You successfully changed your password!`);
      setTimeout(() => {
        setMessage('');
      }, 3000);
      setFormData({
        passwordCurrent: '',
        newPassword: '',
        passwordConfirm: '',
      });
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

        <Form submitForm={handleChangePassword}>
          <FormInput
            label='Current password'
            inputType='password'
            onchange={handleFormData}
            placeholder='••••••••'
            required
            name='currentPassword'
          />
          <FormInput
            label='New password'
            inputType='password'
            onchange={handleFormData}
            required
            placeholder='••••••••'
            name='newPassword'
          />
          <FormInput
            label='Confirm password'
            inputType='password'
            onchange={handleFormData}
            required
            placeholder='••••••••'
            name='confirmPassword'
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
