import { styled } from "../utils/Theme";

const Base = styled.span`
  ${({ theme }) => `${theme.importFontFamily};
  ${theme.useFontFamily};
  font-style: normal;
  letter-spacing: 0.6684448px;
  color: ${theme.color.black1};`}
`;

export const Span = styled(Base)``;
