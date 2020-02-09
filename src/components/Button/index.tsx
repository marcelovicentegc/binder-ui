import React from "react";
import { StyledButton, StyledButtonProps } from "./style";
import { Span } from "../../typography";

export enum ButtonType {
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary",
  quaternary = "quaternary",
  round = "round"
}

interface IProps
  extends Omit<
      React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
      >,
      "ref" | "type"
    >,
    Omit<StyledButtonProps, "withIcon" | "withSecondaryIcon"> {
  label: string;
  icon?: React.ReactNode;
  secondaryIcon?: React.ReactNode;
  labelProps?: Omit<React.HTMLProps<HTMLSpanElement>, "ref" | "as">;
}

export const Button = ({
  buttonType,
  icon,
  secondaryIcon,
  label,
  labelProps,
  ...props
}: IProps) => {
  return (
    <StyledButton
      buttonType={buttonType}
      withIcon={!!icon}
      withSecondaryIcon={!!secondaryIcon}
      {...props}
    >
      {icon && icon}
      {buttonType !== ButtonType.round && <Span {...labelProps}>{label}</Span>}
      {secondaryIcon && secondaryIcon}
    </StyledButton>
  );
};
