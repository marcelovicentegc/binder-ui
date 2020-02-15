import React from "react";

export const ShareIcon: React.SFC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="shareIcon"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 17C24.6569 17 26 15.6569 26 14C26 12.3431 24.6569 11 23 11C21.3431 11 20 12.3431 20 14C20 15.6569 21.3431 17 23 17ZM23 19C25.7614 19 28 16.7614 28 14C28 11.2386 25.7614 9 23 9C20.2386 9 18 11.2386 18 14C18 16.7614 20.2386 19 23 19Z"
        fill="#CC3E78"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 11C11.1046 11 12 10.1046 12 9C12 7.89543 11.1046 7 10 7C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11ZM10 13C12.2091 13 14 11.2091 14 9C14 6.79086 12.2091 5 10 5C7.79086 5 6 6.79086 6 9C6 11.2091 7.79086 13 10 13Z"
        fill="#333333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 22.8586C28.1962 21.0903 25.7255 20 23 20C17.4772 20 13 24.4772 13 30H15C15 25.5817 18.5817 22 23 22C26.012 22 28.6353 23.6646 30 26.124V22.8586Z"
        fill="#CC3E78"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.02238 21C4.27499 18.1968 6.63093 16 9.49996 16C11.8416 16 13.8414 17.4633 14.6349 19.5254C15.1686 19.1098 15.7385 18.7384 16.3388 18.4166C15.1629 15.8124 12.5431 14 9.49996 14C5.52583 14 2.27365 17.091 2.01636 21H4.02238Z"
        fill="#333333"
      />
    </svg>
  );
};
