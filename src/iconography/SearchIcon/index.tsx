import React from "react";

export const SearchIcon: React.SFC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="searchIcon"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.5548 27L19.3287 19.9517L20.7739 18.5421L28 25.5904L26.5548 27Z"
        fill={props.color ? props.color : "#333333"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 22C17.6421 22 21 18.6421 21 14.5C21 10.3579 17.6421 7 13.5 7C9.35786 7 6 10.3579 6 14.5C6 18.6421 9.35786 22 13.5 22ZM13.5 24C18.7467 24 23 19.7467 23 14.5C23 9.25329 18.7467 5 13.5 5C8.25329 5 4 9.25329 4 14.5C4 19.7467 8.25329 24 13.5 24Z"
        fill={props.color ? props.color : "#EAB634"}
      />
    </svg>
  );
};
