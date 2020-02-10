import { styled } from "../../utils/Theme";
import { MenuProps } from ".";

export const MenuWrapper = styled.aside`
  cursor: pointer;
`;

export const StyledMenu = styled.nav<
  Omit<MenuProps, "showMenu" | "rightAsLeft" | "rightSpace" | "menuItems"> & {
    right?: number;
    left?: number;
  }
>`
  ${({ theme }) => `border-radius: 13px;
  position: absolute;
  width: max-content;
  z-index: 2;
  backdrop-filter: blur(30px);
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 0.3);

  ul {
    list-style-type: none;
    margin: 0;
    padding: 20px 20px 16px 20px;
  }

  li {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 12px;
    cursor: pointer;

    span {
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
      display: block;
      margin-left: 16px;
      padding-bottom: 8px;
      text-decoration: none;
      width: calc(100% - 50px);
      transition: .2s;
    }
  }

  li:last-child {
    margin-bottom: 0;

    span {
      border: 0;
      margin-bottom: 0;
      padding-bottom: 0;
    }
  }

  .section {
    border-bottom: 1px solid ${theme.color.primaryBlack};
    padding-bottom: 8px;

    span {
      border: 0;
      padding-bottom: 0;
    }
  }

  .withArrow span {
    align-items: center;
    display: flex;

    svg {
      max-width: 15px;
      max-height: 15px;
    }
  }

  .title {
    margin-bottom: 16px;
    span {
      border: 0;
    }

    svg {
      height: 20px;
      transform: rotateY(180deg);
      width: 12px;
    }
  }
`}
`;

export const TitleWrapper = styled.div<{ direction: "column" | "row" }>`
  display: flex;
  direction: ${({ direction }) => direction};
  width: calc(100% - 32px);
`;
