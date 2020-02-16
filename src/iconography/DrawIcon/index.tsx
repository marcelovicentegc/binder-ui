import React from "react";

export const DrawIcon: React.SFC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="drawIcon"
      {...props}
    >
      <path
        d="M20.2443 28L18.9025 26.6129L24.4219 20.967L14.5821 22.9792L13.8113 21.2503L19.7304 16.4933L9.61459 21.1429L8.59635 19.5214L19.3592 9.81197L10.4235 13.2405L9.21491 11.9512L11.1277 7.18437L4.98017 10.9646L4 9.28449L12.6217 4L13.9826 5.21123L11.8033 10.6325L23.5464 6.12943L24.5075 7.77045L14.5916 16.7179L26.0777 11.4335L27.0484 13.094L18.1316 20.2637L27.1435 18.4176L28 20.0684L20.2443 28Z"
        fill="#262626"
      />
    </svg>
  );
};
