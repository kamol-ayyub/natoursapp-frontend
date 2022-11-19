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
} from '@/components';
import { useRef, FC, useState, useEffect, FormEvent } from 'react';
import useHttp from '@/hooks/use-http';
import { AccountViewProps, InputRefType } from '@/types/types';
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
export const AccountView: FC<AccountViewProps> = ({ children }) => {
  const [message, setMessage] = useState<string>('');
  const [photo, setPhoto] = useState<any>([]);
  const { response, sendRequest: changeNameAndEmail } = useHttp();
  const token = localStorage.getItem('token');

  const handleImage = (event: any) => {
    setPhoto(event.target.files[0].name);
  };

  // refs for get data from form
  const nameRef = useRef<InputRefType>(null);
  const emailRef = useRef<InputRefType>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // function for request to backend
  const handleSignup = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
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
      formRef.current?.reset();
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
          <Form formRef={formRef} submitForm={handleSignup}>
            <FormGroup>
              <FormInput label='Name' inputType='text' ref={nameRef} required />
              <FormInput
                inputType='email'
                ref={emailRef}
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
};
