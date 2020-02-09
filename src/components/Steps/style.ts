import { styled } from "../../utils/Theme";

export const StepsWrapper = styled.div`
  position: absolute;
  bottom: 33px;
  left: calc(50% - 50px);
  display: flex;
  flex-direction: row;
  transition: 0.2s;

  @media only screen and (max-width: 500px) {
    bottom: 36px;
    right: 200px;
    left: unset;
  }
`;
