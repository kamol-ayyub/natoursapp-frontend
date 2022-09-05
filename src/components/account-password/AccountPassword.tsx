import { FC, useRef } from 'react';
import FormInput from '../input/EmailInput';

export const AccountPassword: FC = () => {
  const currentPassword = useRef<HTMLInputElement>(null);

  const newPassword = useRef<HTMLInputElement>(null);
  const passwordConfirm = useRef<HTMLInputElement>(null);
  // function for request to backend
  const handleChangePassword = (event: any) => {
    event.preventDefault();
    console.log(
      currentPassword.current?.value,
      newPassword.current?.value,
      passwordConfirm.current?.value
    );
    event.target.reset();
  };
  return (
    <div className='user-view__form-container'>
      <h2 className='heading-secondary ma-bt-md'>Password change</h2>
      <form
        onSubmit={handleChangePassword}
        action=''
        className='form form-user-password'
      >
        <FormInput
          label='Current password'
          inputType='password'
          formClass='form--signup ma-bt-md'
          ref={currentPassword}
          placeholder='••••••••'
          required
        />
        <FormInput
          label='New password'
          inputType='password'
          formClass='form--signup ma-bt-md'
          ref={newPassword}
          required
          placeholder='••••••••'
        />
        <FormInput
          label='Confirm password'
          inputType='password'
          formClass='form--signup ma-bt-md'
          ref={passwordConfirm}
          required
          placeholder='••••••••'
        />
        <button
          type='submit'
          className='btn btn--small btn--green btn--save-password'
        >
          Save password
        </button>
      </form>
    </div>
  );
};
