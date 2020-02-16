import { styled } from "../../utils/Theme";

export const Separator = styled.div<{ verticalMargin?: number }>`
  ${({ theme, verticalMargin }) => `
  ${
    verticalMargin
      ? `
  border-right: 1px solid ${theme.color.gray2};
  height: auto;
  width: 1px;
  margin: -${verticalMargin}px 0px;`
      : `
  border-bottom: 1px solid ${theme.color.primaryBlack};
  padding-bottom: 8px;

  span {
    border: 0;
    padding-bottom: 0;
  }`
  }`}
`;
