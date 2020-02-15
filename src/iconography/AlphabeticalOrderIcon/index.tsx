import React from "react";

export const AlphabeticalOrderIcon: React.SFC<React.SVGProps<
  SVGSVGElement
>> = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      data-testid="alphabeticalOrderIcon"
      {...props}
    >
      <path
        d="M23.9829 19.5327L30.01 13.5499L28.5423 12.093L23.5457 17.0425V3H21.4639V17.0425L16.4777 12.093L15.01 13.5499L21.4639 19.9667L22.5048 21L23.9829 19.5327Z"
        fill="black"
      />
      <path
        d="M9.93794 12.3344H4.96454L4.06738 15H2L6.30053 3H8.63121L13 14.99H10.8644L9.93794 12.3344ZM5.50089 10.7271H9.36259L8.53369 8.25125L7.41223 4.72712L6.32979 8.27121L5.50089 10.7271Z"
        fill="#262626"
      />
      <path
        d="M16.35 27.2415V29H6.34998V27.751L13.2465 18.7485H6.52239V17H16.1471V18.249L9.2303 27.2515H16.35V27.2415Z"
        fill="#D86C30"
      />
    </svg>
  );
};
