import React from "react";
import { storiesOf } from "@storybook/react";
import { Steps } from "../src";

const stories = storiesOf("Steps", module).addParameters({
  backgrounds: [{ name: "sky blue", value: "#00aced", default: true }]
});

stories.add(
  "secondary",
  () => {
    const [currentStep, setCurrentStep] = React.useState(1);

    return (
      <Steps
        type={"secondary"}
        totalSteps={5}
        currentStep={currentStep}
        setCurrentStep={currentStep => setCurrentStep(currentStep)}
      />
    );
  },
  {
    info: { inline: true }
  }
);

stories.add(
  "primary",
  () => {
    const [currentStep, setCurrentStep] = React.useState(1);

    return (
      <Steps
        type={"primary"}
        totalSteps={5}
        currentStep={currentStep}
        setCurrentStep={currentStep => setCurrentStep(currentStep)}
      />
    );
  },
  {
    info: { inline: true }
  }
);
