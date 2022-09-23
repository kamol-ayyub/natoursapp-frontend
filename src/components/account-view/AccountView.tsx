import { Form, FormInput, HeadingSecondary, UserViewFormContainer } from '../';
import { useRef, FC } from 'react';
import useHttp from '../../hooks/use-http';
import UserImg from '../../img/users/default.jpg';
import { AccountViewProps, InputRefType } from '../../types/types';
import styled from 'styled-components';
import { FormGroup } from '../form/FormGroup';
import { Button } from '../button/Button';
import { FormUploadPhoto } from '../form/FormUploadPhoto';
const UserViewContent = styled.div`
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 7rem 0;
`;

export const AccountView: FC<AccountViewProps> = ({ children }) => {
  const { response, sendRequest: changeNameAndEmail } = useHttp();
  const token = localStorage.getItem('token');

  // refs for get data from form
  const nameRef = useRef<InputRefType>(null);
  const emailRef = useRef<InputRefType>(null);
  const photoRef = useRef<InputRefType>(null);

  // function for request to backend
  const handleSignup = async (event: any): Promise<void> => {
    event.preventDefault();
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const photo = photoRef.current?.value;

    await changeNameAndEmail({
      url: `/api/v1/users/updateMe`,
      method: 'PATCH',
      data: { name, email, photo },
      headers: { Authorization: `Bearer ${token}` },
    });
    event.target.reset();
  };

  return (
    <>
      <UserViewContent>
        <UserViewFormContainer>
          <HeadingSecondary MaBtLg>Your account settings</HeadingSecondary>
          <Form submitForm={handleSignup}>
            <FormGroup>
              <FormInput
                label='Name'
                inputType='text'
                MaBtMd
                ref={nameRef}
                required
              />
              <FormInput
                label='Email address'
                inputType='email'
                MaBtMd
                ref={emailRef}
                required
              />
              <FormUploadPhoto>
                <img className='form__user-photo' src={UserImg} alt='user' />
                <FormInput
                  name='photo'
                  id='photo'
                  accept='image/*'
                  inputType='file'
                  className='form__upload'
                  ref={photoRef}
                  Upload
                  HTMLFor='photo'
                  label='Choose new photo'
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
        <div className='line'>&nbsp;</div>
        {children}
      </UserViewContent>
    </>
  );
};
