import React from "react";

export const MoveIcon: React.SFC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      data-testid="moveIcon"
      {...props}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M21 6H12V8H21C22.1 8 23 8.9 23 10V19V22H25V21V10C25 7.79 23.21 6 21 6Z"
          fill="black"
        />
        <path d="M23 26V28H25V25V24H23V26Z" fill="black" />
        <path
          d="M8 8H10V6H8.91L7.44 7.47L6.03 6.06L6.09 6H6V19H8V8Z"
          fill="black"
        />
        <path
          d="M25 2H13V4H25C26.1 4 27 4.9 27 6V21V22V24H29V6C29 3.79 27.21 2 25 2Z"
          fill="black"
        />
        <path d="M25 22H23V24H25V22Z" fill="black" />
        <path d="M12 6H10V8H12V6Z" fill="black" />
        <path d="M10 4.91V4V2.09L6.09003 6H8.91003L10 4.91Z" fill="black" />
        <path
          d="M7.44003 7.47L8.91003 6H6.09003L6.03003 6.06L7.44003 7.47Z"
          fill="black"
        />
        <path d="M10 4V4.91L10.91 4H10Z" fill="black" />
        <path
          d="M11.46 3.46L10.91 4H12H13V2H10V2.09L10.04 2.04L11.46 3.46Z"
          fill="black"
        />
        <path
          d="M10.91 4.00001L11.46 3.46001L10.04 2.04001L10 2.09001V4.00001H10.91Z"
          fill="black"
        />
        <path
          d="M19 21.59L13.21 15.79L11.79 17.21L16.59 22H3V24H16.59L11.79 28.79L13.21 30.21L19.41 24L20.41 23L19 21.59Z"
          fill="black"
        />
        <path
          d="M20 11C20 11 17.99 11 15.5 11C13.01 11 11 11 11 11C11 11 13.01 11 15.5 11C17.99 11 20 11 20 11Z"
          fill="black"
          stroke="black"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect x="3" y="2" width="26" height="28.21" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
