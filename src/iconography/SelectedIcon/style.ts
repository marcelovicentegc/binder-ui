import { styled } from "../../utils/Theme";

export const StyledSelectedIcon = styled.div<{ dimension?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ dimension }) =>
    dimension
      ? `width: ${dimension}px; height: ${dimension}px`
      : "width: 24px; height: 24px;"}
  background: white;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  border-radius: 50%;

  & > svg {
    width: ${({ dimension }) => (dimension ? dimension / 2 : "12")}px;
    height: auto;
  }
`;
