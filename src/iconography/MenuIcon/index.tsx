import React from "react";

export const MenuIcon: React.SFC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="menuIcon"
      {...props}
    >
      <circle
        cx="6"
        cy="16"
        r="3"
        stroke={props.color ? props.color : "#333333"}
        strokeWidth="2"
      />
      <circle
        cx="16"
        cy="16"
        r="3"
        stroke={props.color ? props.color : "#333333"}
        strokeWidth="2"
      />
      <circle
        cx="26"
        cy="16"
        r="3"
        stroke={props.color ? props.color : "#333333"}
        strokeWidth="2"
      />
    </svg>
  );
};
