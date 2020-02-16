import { styled } from "../../../utils/Theme";

export const TypographyItemWrapper = styled.div<{
  isLastItem?: boolean;
  isSelectedItem?: boolean;
}>`
  cursor: pointer;
  margin: 0px -16px;
  padding: 8px 16px 0px 16px;
  transition: 0.2s;
  position: relative;

  &:hover {
    background-color: ${({ theme }) => theme.color.white3};
  }

  & > svg {
    position: absolute;
    right: 30px;
    top: 14px;
  }

  ${({ isLastItem }) => (isLastItem ? "padding-bottom: 8px" : "")}

  ${({ isSelectedItem, theme }) =>
    isSelectedItem
      ? `background-color: ${theme.color.white3};
    & > span {
        font-weight: 600;
    }`
      : ""}
`;
