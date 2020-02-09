import { styled } from "../../utils/Theme";

export const RainbowFooterWrapper = styled.footer`
  position: absolute;
  display: flex;
  left: 0;
  right: 0;
  height: 58px;

  > div {
    position: relative;
    height: 100%;
    width: calc(100vw / 8);
  }
`;
