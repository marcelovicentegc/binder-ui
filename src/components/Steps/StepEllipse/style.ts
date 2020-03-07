import { styled } from "../../../utils/Theme";

export const StyledStepEllipse = styled.div<{
  isCurrentStep: boolean;
  type: "primary" | "secondary";
}>`
  ${({ theme, isCurrentStep, type }) => `width: ${
    type === "primary" ? "7px" : "15px"
  };
  height: ${type === "primary" ? "7px" : "15px"};
  border: solid 2px #000000;
  border: solid 2px ${
    type === "primary" ? theme.color.gray2 : theme.color.white1
  };
  border-radius: 50%;
  margin: 0px 5px;
  cursor: pointer;
  mix-blend-mode: difference;

  ${isCurrentStep &&
    `background-color: #000000;
    background-color: ${
      type === "primary" ? theme.color.gray2 : theme.color.white1
    };
    border-radius: 32px;
    height: 8px;
    mix-blend-mode: difference;`}
    width: 16px;
  }`}
`;
