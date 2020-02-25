import { styled } from "../../utils/Theme";

export const InputBase = styled.input`
  outline: none;
  background-color: #ffffff;
  transition: 0.2s;
  width: 100%;
  margin-left: 0px;
`;

export const StyledInput = styled(InputBase)`
  padding: 9px 15px;
  border-radius: 5px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);
  border: solid 1.5px transparent;

  &:focus {
    border: solid 1.5px #202020;
  }
`;
