import React from "react";

export const SideBySideIcon: React.SFC<React.SVGProps<
  SVGSVGElement
>> = props => {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      width="32"
      height="32"
      data-testid="sideBySideIcon"
      {...props}
    >
      <path
        d="M0 1H12V27H0"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
        fill={props.color ? props.color : "#33333"}
      />
      <path
        d="M28 27H16V1H28"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
        fill={props.color ? props.color : "#33333"}
      />
    </svg>
  );
};
