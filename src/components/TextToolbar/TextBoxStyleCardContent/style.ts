import { styled } from "../../../utils/Theme";

export const Rectangule = styled.div<{
  strokeHex?: string;
  dashed?: boolean;
}>`
  ${({ theme, strokeHex, dashed }) => `width: 224px;
  height: 48px;
  background: ${theme.color.white3};
  border: ${
    strokeHex || dashed
      ? `2px ${dashed ? "dashed" : "solid"} ${strokeHex}`
      : `1px ${dashed ? "dashed" : "solid"} ${theme.color.white4}`
  };
  cursor: pointer;
  `}
`;
