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
    display: flex;
    align-items: center;
  }

  & > svg {
    &:nth-child(-n + 2) {
      height: 22px;
      width: 22px;
    }

    height: 32px;
    width: auto;
  }
`;
