import React from "react";

export const XIcon: React.SFC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="xIcon"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 7.26512L13.4069 12L18 16.7349L16.7728 18L12 13.0798L7.22722 18L6 16.7349L10.5931 12L6 7.26512L7.22722 6L12 10.9202L16.7728 6L18 7.26512Z"
        fill="#4C4C4C"
      />
    </svg>
  );
};
