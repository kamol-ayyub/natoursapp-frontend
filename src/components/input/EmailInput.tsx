import React, { ForwardRefRenderFunction, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref: String | HTMLInputElement | null;
  label: string;
  placeholder: string;
  inputType: 'email' | 'password';
  passwordClass: 'form__group ma-bt-md' | 'form__group';
}
const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, placeholder, inputType, passwordClass },
  ref
) => {
  return (
    <div className={passwordClass}>
      <label className='form__label'>{label}</label>
      <input
        className=' form__input'
        type={inputType}
        placeholder={placeholder}
        ref={ref}
      />
    </div>
  );
};
const FormInput = React.forwardRef(Input);

export default FormInput;
