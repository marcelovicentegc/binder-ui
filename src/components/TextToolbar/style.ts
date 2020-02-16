import { styled } from "../../utils/Theme";

export const StyledTextToolbar = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px 13px;
  background: white;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  width: max-content;

  & > svg,
  span,
  div {
    margin-right: 14px;

    &:last-child {
      margin-right: 0px;
    }
  }

  & > span {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  & > svg {
    cursor: pointer;

    &:nth-child(-n + 2) {
      height: 22px;
      width: 22px;
    }

    height: 32px;
    width: auto;
  }
`;

export const ToolbarItemWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: 0.2s;

  > :nth-child(2) {
    height: 8px;
    width: auto;
  }
`;

export const MenuArea = styled.div`
  position: relative;
  width: auto;
  height: auto;
`;

export const ItemWrapper = styled.div<{
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

  ${({ isSelectedItem, theme }) =>
    isSelectedItem
      ? `background-color: ${theme.color.white3};
      & > span {
          font-weight: 600;
      }`
      : ""}
`;
