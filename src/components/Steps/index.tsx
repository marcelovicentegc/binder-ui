import React from "react";
import { StepEllipse } from "./StepEllipse";
import { generateKey } from "../../utils/generateKey";
import { StepsWrapper } from "./style";

interface IProps {
  totalSteps: number;
  currentStep: number;
  setCurrentStep: (currentStep: number) => void;
}

export const Steps = (props: IProps) => {
  const getSteps = () => {
    return [...new Array(props.totalSteps)].map((_, i) => (
      <StepEllipse
        isCurrentStep={props.currentStep === i + 1}
        key={generateKey(20)}
        currentStepValue={i + 1}
        onClick={currentStepValue => props.setCurrentStep(currentStepValue)}
      />
    ));
  };

  return <StepsWrapper>{getSteps()}</StepsWrapper>;
};
