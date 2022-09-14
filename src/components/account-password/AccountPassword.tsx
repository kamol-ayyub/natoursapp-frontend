import { FC, useRef, useState, useEffect } from 'react';
import FormInput from '../input/EmailInput';
import useHttp from '../../hooks/use-http';
import { ErrorNotif } from '../../components/notification/Notification';

export const AccountPassword: FC = () => {
  const [message, setMessage] = useState<string | boolean>('');

  const token = localStorage.getItem('token');
  const currentPasswordRef = useRef<HTMLInputElement>(null);
  const newPasswordRef = useRef<HTMLInputElement>(null);
  const passwordConfRef = useRef<HTMLInputElement>(null);

  const { response, sendRequest: sendRequestToResetPass, isError } = useHttp();

  // function for request to backend
  const handleChangePassword = async (event: any) => {
    event.preventDefault();

    const passwordCurrent = currentPasswordRef.current?.value;
    const password = newPasswordRef.current?.value;
    const passwordConfirm = passwordConfRef.current?.value;

    if (passwordCurrent && password && passwordConfirm)
      await sendRequestToResetPass({
        url: `/api/v1/users/updateMyPassword`,
        method: 'PATCH',
        data: { passwordCurrent, password, passwordConfirm },
        headers: { Authorization: `Bearer ${token}` },
      });
    event.target.reset();
  };
  const clearMsg = () => {
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };
  useEffect(() => {
    if (isError) {
      setMessage(`Password or password confirm is not valid!`);
      clearMsg();
    }
  }, [isError]);

  return (
    <>
      <div className='user-view__form-container'>
        <h2 className='heading-secondary ma-bt-md'>Password change</h2>
        {message && <ErrorNotif text={message} />}
        <form
          onSubmit={handleChangePassword}
          action=''
          className='form form-user-password'
        >
          <FormInput
            label='Current password'
            inputType='password'
            formClass='form--signup ma-bt-md'
            ref={currentPasswordRef}
            placeholder='••••••••'
            required
          />
          <FormInput
            label='New password'
            inputType='password'
            formClass='form--signup ma-bt-md'
            ref={newPasswordRef}
            required
            placeholder='••••••••'
          />
          <FormInput
            label='Confirm password'
            inputType='password'
            formClass='form--signup ma-bt-md'
            ref={passwordConfRef}
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
    </>
  );
};
