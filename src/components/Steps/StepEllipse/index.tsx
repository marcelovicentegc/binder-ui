import React from "react";
import { StyledStepEllipse } from "./style";

interface IProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "ref"
  > {
  isCurrentStep?: boolean;
}

export const StepEllipse = (props: IProps) => {
  return <StyledStepEllipse isCurrentStep={!!props.isCurrentStep} {...props} />;
};
