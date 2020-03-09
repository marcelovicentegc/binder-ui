import React from "react";
import { StyledStepEllipse } from "./style";

interface IProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "ref" | "onClick"
  > {
  isCurrentStep?: boolean;
  currentStepValue: number;
  onClick: (value: number) => void;
  type: "primary" | "secondary";
}

export const StepEllipse = ({
  isCurrentStep,
  onClick,
  currentStepValue,
  ...props
}: IProps) => {
  return (
    <StyledStepEllipse
      isCurrentStep={!!isCurrentStep}
      onClick={() => onClick(currentStepValue)}
      {...props}
    />
  );
};
