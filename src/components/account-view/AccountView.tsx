import { FormInput, UserViewFormContainer } from '../';
import { useRef, FC, useEffect } from 'react';
import useHttp from '../../hooks/use-http';
import UserImg from '../../img/users/default.jpg';
import { AccountViewProps } from '../../types/types';
import styled from 'styled-components';
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

  useEffect(() => {
    if (response?.status === 'success') {
      console.log(response);
    }
  }, [response]);

  return (
    <>
      <UserViewContent>
        <UserViewFormContainer>
          <h2 className='heading-secondary ma-bt-md'>Your account settings</h2>
          <form onSubmit={handleSignup} className='form form-user-data'>
            <div className='form__group'>
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
              <div className='form__group form__photo-upload'>
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
              </div>
              <div className='form__group right'>
                <button className='btn btn--small btn--green'>
                  Save settings
                </button>
              </div>
            </div>
          </form>
        </UserViewFormContainer>
        <div className='line'>&nbsp;</div>
        {children}
      </UserViewContent>
    </>
  );
};
