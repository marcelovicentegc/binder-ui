import { styled } from "../../../utils/Theme";

export const StyledStepEllipse = styled.div<{ isCurrentStep: boolean }>`
  ${({ theme, isCurrentStep }) => `width: 7px;
  height: 7px;
  border: solid 2px #000000;
  border: solid 2px ${theme.color.gray2};
  border-radius: 50%;
  margin: 0px 5px;
  cursor: pointer;
  mix-blend-mode: difference;

  ${isCurrentStep &&
    `background-color: #000000;
    background-color: ${theme.color.gray2};
    border-radius: 32px;
    height: 8px;
    mix-blend-mode: difference;`}
    width: 16px;
  }`}
`;
