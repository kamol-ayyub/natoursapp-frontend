import { Form, FormInput, HeadingSecondary, UserViewFormContainer } from '../';
import { useRef, FC, useEffect } from 'react';
import useHttp from '../../hooks/use-http';
import UserImg from '../../img/users/default.jpg';
import { AccountViewProps } from '../../types/types';
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
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const photoRef = useRef<HTMLInputElement>(null);

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
          <Form submitForm={handleSignup} className='form form-user-data'>
            <FormGroup>
              <FormInput
                label='Name'
                inputType='text'
                formClass='form--signup ma-bt-md'
                ref={nameRef}
                required
              />
              <FormInput
                label='Email address'
                inputType='email'
                formClass='form--signup ma-bt-md'
                ref={emailRef}
                required
              />
              <FormUploadPhoto>
                <img className='form__user-photo' src={UserImg} alt='user' />
                <input
                  name='photo'
                  id='photo'
                  accept='image/*'
                  type='file'
                  className='form__upload'
                  ref={photoRef}
                />

                <label htmlFor='photo'>Choose new photo</label>
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
