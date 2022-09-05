import FormInput from '../input/EmailInput';
import { useRef, FC } from 'react';
import UserImg from '../../img/users/default.jpg';

interface AccountViewProps {
  children: JSX.Element;
}
export const AccountView: FC<AccountViewProps> = ({ children }) => {
  // refs for get data from form
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const passwordConfirm = useRef<HTMLInputElement>(null);
  // function for request to backend
  const handleSignup = (event: any) => {
    event.preventDefault();
    console.log(
      email.current?.value,
      name.current?.value,
      password.current?.value,
      passwordConfirm.current?.value
    );
    event.target.reset();
  };
  return (
    <div className='user-view__content'>
      <div className='user-view__form-container'>
        <h2 className='heading-secondary ma-bt-md'>Your account settings</h2>
        <form onSubmit={handleSignup} className='form form-user-data'>
          <div className='form__group'>
            <FormInput
              label='Name'
              inputType='text'
              formClass='form--signup ma-bt-md'
              ref={name}
              required
            />
            <FormInput
              label='Email address'
              inputType='email'
              formClass='form--signup ma-bt-md'
              ref={email}
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
      </div>
      <div className='line'>&nbsp;</div>
      {children}
    </div>
  );
};
