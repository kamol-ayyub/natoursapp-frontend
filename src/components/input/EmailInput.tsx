import React, { ForwardRefRenderFunction, InputHTMLAttributes } from 'react';
import { Label } from './Label';

interface InputType extends InputHTMLAttributes<HTMLInputElement> {
  ref?: String | HTMLInputElement | null;
  label?: string;
  placeholder?: string;
  inputType: 'email' | 'password' | 'text' | 'file';
  formClass?:
    | 'form__group ma-bt-md'
    | 'form__group'
    | 'form--signup'
    | 'form--signup ma-bt-md';
  required?: boolean;
  classname?: string;
}
const Input: ForwardRefRenderFunction<HTMLInputElement, InputType> = (
  { label, placeholder, inputType, formClass, required, classname },
  ref
) => {
  return (
    <div className={formClass}>
      {label && <Label>{label}</Label>}
      <input
        className={classname ? classname : `form__input`}
        type={inputType}
        placeholder={placeholder}
        ref={ref}
        required={required}
        minLength={8}
        maxLength={30}
      />
    </div>
  );
};
export const FormInput = React.forwardRef(Input);
