import React from "react";
import { InputWrapper, LabelWrapper } from "./style";
import { Label2 } from "../../typography";

export enum InputType {
  primary = "primary",
  secondary = "secondary"
}

interface IProps {
  label?: string;
  type?: InputType;
  inputProps?: React.HTMLProps<HTMLInputElement>;
}

export const Input = ({ label, inputProps, type }: IProps) => {
  return (
    <InputWrapper type={type}>
      {type && type !== InputType.primary && label && (
        <LabelWrapper>
          <Label2>{label}</Label2>
        </LabelWrapper>
      )}
      <input {...inputProps} />
    </InputWrapper>
  );
};
