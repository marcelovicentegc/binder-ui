import React from "react";

export const EditUserIcon: React.SFC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      data-testid="editUserIcon"
      {...props}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M9 4C11.76 4 14 6.24 14 9C14 11.76 11.76 14 9 14C6.24 14 4 11.76 4 9C4 6.24 6.24 4 9 4ZM9 2C5.13 2 2 5.13 2 9C2 12.87 5.13 16 9 16C12.87 16 16 12.87 16 9C16 5.13 12.87 2 9 2Z"
          fill="black"
        />
        <path
          d="M22.3 15.93C22.02 15.45 22.19 14.84 22.67 14.56C23.15 14.28 23.76 14.45 24.04 14.93L25.45 17.37L30 25.33V21.31L27.17 16.37L25.76 13.93C25.48 13.45 25.65 12.84 26.13 12.56C26.61 12.28 27.22 12.45 27.5 12.93L28.91 15.37L30.01 17.27V13.27L29.24 11.93L28.34 10.38L21.29 6.70001L20 7.44001L19.67 15.38L20.57 16.93L26.87 27.88L28.6 26.88L23.71 18.37L22.3 15.93ZM21.93 9.29001L25.03 10.91C24.42 11.3 24 11.87 23.79 12.51C23.13 12.37 22.42 12.45 21.79 12.78L21.93 9.29001Z"
          fill="black"
        />
        <path
          d="M9 17C6.42 17 4.02 17.76 2 19.06V21.52C3.9 19.95 6.34 19 9 19C15.07 19 20 23.93 20 30H22C22 22.82 16.18 17 9 17Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect x="2" y="2" width="28" height="28" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
