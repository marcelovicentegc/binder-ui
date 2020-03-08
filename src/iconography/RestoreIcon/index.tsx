import React from "react";

export const RestoreIcon: React.SFC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      width="29"
      height="23"
      viewBox="0 0 29 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="restoreIcon"
      {...props}
    >
      <path
        d="M17.12 0C10.95 0 5.91 4.89 5.65 11L5.78 18.68L1.32 14.22L0 15.53L5.78 21.31L6.71 22.24L8.03 20.92L13.42 15.53L12.1 14.21L7.64 18.67L7.65 11C7.91 5.99 12.06 2 17.12 2C22.36 2 26.62 6.26 26.62 11.5C26.62 16.74 22.36 21 17.12 21C16.95 21 16.79 20.98 16.62 20.97V22.97C16.79 22.98 16.95 23 17.12 23C23.46 23 28.62 17.84 28.62 11.5C28.62 5.16 23.46 0 17.12 0Z"
        fill="black"
      />
    </svg>
  );
};
