import { styled } from "../../utils/Theme";

export const SearchBarWrapper = styled.div`
  position: relative;
  width: fit-content;

  svg {
    position: absolute;
    right: 12px;
    top: 4px;
  }
`;

export const StyledSearchBar = styled.input`
  backdrop-filter: blur(2px);
  border: 2px solid ${({ theme }) => theme.color.gray2};
  background: white;
  border-radius: 28px;
  height: 39px;
  min-width: 244px;
  width: auto;
  padding: 0px 48px 0px 16px;
  transition: 0.2s;
  outline: none;

  &:hover {
    background: none;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15);
  }

  span {
    font-size: 16px;
    line-height: 29px;
    letter-spacing: -0.38px;
  }

  svg {
    max-height: 20px;
    max-width: 20px;
  }
`;
