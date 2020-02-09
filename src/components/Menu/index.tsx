import React from "react";

type MenuMode = "title" | "section" | "withArrow";

export interface IMenuItemsProps {
  checkGreen?: boolean;
  checkBlack?: boolean;
  icon: React.ReactNode;
  mode?: MenuMode | MenuMode[];
  onClick?: () => void;
  title: string;
  descriptions?: React.ReactNode[];
}

interface IProps {
  menuItems: IMenuItemsProps[];
  menuIconProps?: React.SVGProps<SVGSVGElement>;
  topSpace: number;
  rightSpace: number;
  showMenu: boolean;
  rightAsLeft?: boolean;
  className?: string;
}

export const Menu = ({
  menuItems,
  topSpace,
  rightSpace,
  showMenu,
  className,
  rightAsLeft
}: IProps) => {
  return (
    <section>
      {showMenu && (
        <nav
          style={{
            top: topSpace,
            right: !rightAsLeft && rightSpace,
            left: rightAsLeft && rightSpace
          }}
          className={className}
        >
          <ul>
            {menuItems.map((menuItem, index) => (
              <li key={index}>
                {menuItem.icon}
                <a onClick={menuItem.onClick}>{menuItem.title}</a>
                {menuItem.descriptions?.map((description, index) => (
                  <span key={index}>{description}</span>
                ))}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </section>
  );
};
