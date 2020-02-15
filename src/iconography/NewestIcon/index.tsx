import React from "react";

export const NewestIcon: React.SFC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      data-testid="newestIcon"
      {...props}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M16.5033 22.3235C15.1708 23.435 13.455 24.1 11.5858 24.1C7.35844 24.1 3.91715 20.6895 3.91715 16.5C3.91715 12.3105 7.35844 8.9 11.5858 8.9C14.6915 8.9 17.366 10.743 18.5738 13.3745L20.0116 11.9495C18.3821 9.0045 15.2188 7 11.5858 7C6.29442 7 2 11.256 2 16.5C2 21.744 6.29442 26 11.5858 26C13.9918 26 16.1773 25.1165 17.8644 23.6725L16.5033 22.3235Z"
          fill="black"
        />
        <path
          d="M24.4403 23.4255L30 17.925L28.6389 16.5855L24.0473 21.136V8.22549H22.1301V21.136L17.5385 16.5855L16.1774 17.925L22.1301 23.8245L23.0887 24.7745L24.4403 23.4255Z"
          fill="#4A3B72"
        />
        <path
          d="M12.8223 20.9745L9.66858 17.8395V12.7H11.5857V17.0605L14.1835 19.6255L12.8223 20.9745Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect x="2" y="7" width="28" height="19" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
