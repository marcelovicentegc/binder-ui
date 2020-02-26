import React from "react";
import { MenuWrapper, StyledMenu, TitleWrapper } from "./style";
import { BodyText } from "../../typography";
import { Separator } from "../Separator";
import { ArrowIcon } from "../../iconography";

type TMenuMode = "section" | "withArrow";

export interface MenuItemsProps {
  checkGreen?: boolean;
  checkBlack?: boolean;
  icon: React.ReactNode;
  mode?: TMenuMode | TMenuMode[];
  onClick?: () => void;
  title: string;
  descriptions?: React.ReactNode[];
}

export interface MenuProps {
  menuItems: MenuItemsProps[];
  menuIconProps?: React.SVGProps<SVGSVGElement>;
  topSpace: number;
  rightSpace: number;
  showMenu: boolean;
  rightAsLeft?: boolean;
}

export const Menu = ({
  menuItems,
  topSpace,
  rightSpace,
  showMenu,
  rightAsLeft
}: MenuProps) => {
  const getMenuItemMode = (mode: TMenuMode | null) => {
    switch (mode) {
      case "section":
        return <Separator />;
      case "withArrow":
        return <ArrowIcon width={15} />;
      default:
        return;
    }
  };

  return (
    <MenuWrapper>
      {showMenu && (
        <StyledMenu
          top={topSpace}
          right={!rightAsLeft && rightSpace}
          left={rightAsLeft && rightSpace}
        >
          <ul>
            {menuItems.map((menuItem, index) => (
              <li key={index} onClick={menuItem.onClick}>
                {menuItem.icon}
                <TitleWrapper direction={"column"}>
                  <BodyText>{menuItem.title} </BodyText>
                  {Array.isArray(menuItem.mode)
                    ? menuItem.mode.map(mode => {
                        return getMenuItemMode(mode);
                      })
                    : getMenuItemMode(menuItem.mode)}
                </TitleWrapper>
                {menuItem.descriptions?.map((description, index) => (
                  <span key={index}>{description}</span>
                ))}
              </li>
            ))}
          </ul>
        </StyledMenu>
      )}
    </MenuWrapper>
  );
};
