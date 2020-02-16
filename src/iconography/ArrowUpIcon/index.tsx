import React from "react";

export const ArrowUpIcon: React.SFC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      width="14"
      height="9"
      viewBox="0 0 14 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="arrowUpIcon"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.00001 3.4142L1.70712 8.70709L0.292908 7.29288L7.00001 0.585771L13.7071 7.29288L12.2929 8.70709L7.00001 3.4142Z"
        fill="black"
      />
    </svg>
  );
};
