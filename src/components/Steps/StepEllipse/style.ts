import { styled } from "../../../utils/Theme";

export const StyledStepEllipse = styled.div<{ isCurrentStep: boolean }>`
  ${({ theme, isCurrentStep }) => `width: 15px;
  height: 15px;
  border: solid 2px #000000;
  border: solid 2px ${theme.color.white1};
  border-radius: 50%;
  margin: 0px 5px;
  cursor: pointer;
  mix-blend-mode: difference;

  ${isCurrentStep &&
    `background-color: #000000;
    background-color: ${theme.color.white1};
    mix-blend-mode: difference;`}
  }`}
`;
