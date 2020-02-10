import { styled } from "../../utils/Theme";

export const Separator = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.primaryBlack};
  padding-bottom: 8px;

  span {
    border: 0;
    padding-bottom: 0;
  }
`;
