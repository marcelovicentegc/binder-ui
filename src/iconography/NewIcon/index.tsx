import React from "react";

export const NewIcon: React.SFC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="15"
        y="6"
        width="2"
        height="20"
        fill={props.color ? props.color : "#262626"}
      />
      <rect
        x="26"
        y="15"
        width="2"
        height="20"
        transform="rotate(90 26 15)"
        fill={props.color ? props.color : "#262626"}
      />
    </svg>
  );
};
