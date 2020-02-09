import React from "react";
import { StepEllipse } from "./StepEllipse";
import { observer } from "mobx-react";
import { generateKey } from "../../utils/generateKey";
import { StepsWrapper } from "./style";

interface IProps {
  totalSteps: number;
  currentStep: number;
  setCurrentStep: () => void;
}

export const Steps = observer((props: IProps) => {
  const getSteps = () => {
    // The subtraction operation to create this array and the
    // following additions to the map's index were made to
    // ignore the "splash" and the "skip" steps
    return [...new Array(props.totalSteps - 2)].map((_, i) => (
      <StepEllipse
        isCurrentStep={props.currentStep === i + 1}
        key={generateKey(20)}
        onClick={() => props.setCurrentStep()}
      />
    ));
  };

  return <StepsWrapper>{getSteps()}</StepsWrapper>;
});
