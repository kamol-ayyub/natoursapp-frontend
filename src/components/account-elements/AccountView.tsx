import { FC, useState, useEffect, FormEvent, memo } from 'react';
import {
  Form,
  FormInput,
  HeadingSecondary,
  UserViewFormContainer,
  Image,
  FormUploadPhoto,
  Button,
  FormGroup,
  Notification,
} from '../../components';
import { useHttp } from '../../hooks/index';

import { AccountViewProps, OnChangeType } from '../../types/types';
import styled from 'styled-components';

const UserViewContent = styled.div`
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 7rem 0;
`;
const LineBase = styled.div`
  margin: 6rem 0;
  width: 100%;
  height: 1px;
  background-color: var(--lineColor-e0);
`;
export const AccountView: FC<AccountViewProps> = memo(({ children }) => {
  const [message, setMessage] = useState<string>('');
  const [photo, setPhoto] = useState<any>([]);
  const [accountFormData, setAccountFormData] = useState({
    name: '',
    email: '',
  });

  const { response, sendRequest: changeNameAndEmail } = useHttp();
  let token = localStorage.getItem('token');

  const handleImage = (event: any) => {
    setPhoto(event.target.files[0].name);
  };

  const handleFormData = (e: OnChangeType) => {
    setAccountFormData({
      ...accountFormData,
      [e.target.name]: e.target.value,
    });
  };

  // function for request to backend
  const handleSignup = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    const { name, email } = accountFormData;
    const formData = new FormData();

    formData.append('photo', photo);
    await changeNameAndEmail({
      url: `/api/v1/users/updateMe`,
      method: 'PATCH',
      data: { name, email, formData },
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  useEffect(() => {
    if (response?.status === 'success') {
      setMessage(`You successfully changed your account!`);
      setTimeout(() => {
        setMessage('');
      }, 3000);
      setAccountFormData({
        name: '',
        email: '',
      });
    } else if (response === 'fail') {
      setMessage('Try again!');
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  }, [response]);

  return (
    <>
      <UserViewContent>
        <UserViewFormContainer>
          <HeadingSecondary MaBtLg>Your account settings</HeadingSecondary>
          <Notification
            text={message}
            type={response?.status === 'success' ? 'success' : 'error'}
          />
          <Form submitForm={handleSignup}>
            <FormGroup>
              <FormInput
                onchange={handleFormData}
                label='Name'
                inputType='text'
                required
                HTMLFor='name'
              />
              <FormInput
                inputType='email'
                onchange={handleFormData}
                name='email'
                label={'Email Address'}
                required
              />
              <FormUploadPhoto>
                <Image
                  FormUserPhoto
                  src={'../../img/users/default.jpg'}
                  alt={'user'}
                />
                <FormInput
                  name='photo'
                  id='photo'
                  accept='image/*'
                  inputType='file'
                  Upload
                  HTMLFor='photo'
                  label='Choose new photo'
                  onchange={handleImage}
                />
              </FormUploadPhoto>
              <FormGroup right>
                <Button SmallBtn GreenBtn>
                  Save settings
                </Button>
              </FormGroup>
            </FormGroup>
          </Form>
        </UserViewFormContainer>
        <LineBase />
        {children}
      </UserViewContent>
    </>
  );
});
