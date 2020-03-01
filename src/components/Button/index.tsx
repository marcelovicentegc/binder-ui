import React from "react";
import {
  StyledButton,
  StyledButtonProps,
  ItemWrapper,
  ButtonChildrenWrapper
} from "./style";
import { Label2 } from "../../typography";

export enum ButtonType {
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary",
  quaternary = "quaternary",
  round = "round"
}

export enum ButtonSize {
  small = "small",
  regular = "regular"
}

interface IProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, "ref" | "type" | "as">,
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
  buttonSize,
  ...props
}: IProps) => {
  return (
    <StyledButton
      buttonType={buttonType}
      withIcon={!!icon}
      withSecondaryIcon={!!secondaryIcon}
      buttonSize={buttonSize}
      {...props}
    >
      <ButtonChildrenWrapper buttonSize={buttonSize}>
        {icon && <ItemWrapper>{icon}</ItemWrapper>}
        {buttonType !== ButtonType.round && (
          <Label2 {...labelProps}>{label}</Label2>
        )}
        {secondaryIcon && <ItemWrapper>{secondaryIcon}</ItemWrapper>}
      </ButtonChildrenWrapper>
    </StyledButton>
  );
};
