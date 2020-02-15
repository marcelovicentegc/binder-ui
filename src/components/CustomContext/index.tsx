import React from "react";
import { Menu, MenuItemsProps } from "../Menu";
import { MenuContext } from "./style";

interface CustomContextProps {
  showMenu: boolean;
  menu: MenuItemsProps[];
}

export const CustomContext = ({ showMenu, menu }: CustomContextProps) => {
  const [clickPosition, setClickPosition] = React.useState({
    x: 0,
    y: 0
  });
  React.useEffect(() => {
    document.addEventListener("contextmenu", event => {
      event.preventDefault();
      const xPos = event.pageX;
      const yPos = event.pageY;
      setClickPosition({ x: xPos, y: yPos });
    });
  }, []);

  return (
    <MenuContext>
      <Menu
        menuItems={menu}
        topSpace={clickPosition.y}
        rightSpace={clickPosition.x}
        showMenu={showMenu}
        rightAsLeft
      />
    </MenuContext>
  );
};
