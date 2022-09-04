import React, { ForwardRefRenderFunction, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref: String | HTMLInputElement | null;
  label: string;
  placeholder: string;
  inputType: 'email' | 'password';
  formClass: 'form__group ma-bt-md' | 'form__group' | 'form--signup';
}
const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, placeholder, inputType, formClass },
  ref
) => {
  return (
    <div className={formClass}>
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
