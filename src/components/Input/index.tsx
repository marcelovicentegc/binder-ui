import React from "react";
import { InputWrapper, LabelWrapper, Label } from "./style";

export enum InputType {
  primary = "primary",
  secondary = "secondary"
}

interface IProps {
  label?: string;
  type?: InputType;
  inputProps: React.HTMLProps<HTMLInputElement>;
}

export const Input = ({ label, inputProps, type }: IProps) => {
  return (
    <InputWrapper type={type}>
      {label && (
        <LabelWrapper>
          <Label>{label}</Label>
        </LabelWrapper>
      )}
      <input {...inputProps} />
    </InputWrapper>
  );
};
