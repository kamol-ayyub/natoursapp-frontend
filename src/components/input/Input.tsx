import React, { ForwardRefRenderFunction } from 'react';
import { Label } from '@/components';
import styled, { css } from 'styled-components';
import { InputBaseType, InputType } from '@/types/types';

const InputWrapBase = styled.div<InputBaseType>`
  ${(props) =>
    props.MaBtMd &&
    css`
      margin-bottom: 3rem !important;
    `}
  :not(:last-child) {
    margin-bottom: 2.5rem;
  }
`;

const InputBase = styled.input<InputBaseType>`
  display: block;
  font-family: inherit;
  font-size: 1.5rem;
  color: inherit;
  padding: 1.25rem 1.75rem;
  border: none;
  width: 100%;
  background-color: var(--white-f2);
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  :focus {
    outline: none;
    border-bottom: 3px solid var(--greenColor-55);
  }
  :focus:invalid {
    border-bottom: 3px solid var(--darkOrange);
  }
  :not(:last-child) {
    margin-bottom: 2.5rem;
  }
  ${(props) =>
    props.Upload &&
    css`
      width: 0.1px;
      height: 0.1px;
      opacity: 0;
      overflow: hidden;
      position: absolute;
      z-index: -1;
      :focus {
        outline: 3px solid var(--greenColor-55);
        outline-offset: 3px;
      }
    `}
`;

const Input: ForwardRefRenderFunction<HTMLInputElement, InputType> = (
  { label, placeholder, inputType, required, HTMLFor, Upload, MaBtMd },
  ref
) => {
  return (
    <InputWrapBase>
      {label && (
        <Label Upload={Upload} HTMLFor={HTMLFor}>
          {label}
        </Label>
      )}
      <InputBase
        type={inputType}
        placeholder={placeholder}
        ref={ref}
        required={required}
        minLength={8}
        maxLength={30}
        MaBtMd={MaBtMd}
        Upload={Upload}
        name={HTMLFor}
        id={HTMLFor}
      />
    </InputWrapBase>
  );
};
export const FormInput = React.forwardRef(Input);
