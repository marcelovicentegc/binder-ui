import React from "react";

export const DragDropIcon: React.SFC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      data-testid="dragDropIcon"
      {...props}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M24.33 26.98L29.72 21.58L28.41 20.27L23.95 24.73V15.81H22.08V24.73L17.62 20.27L16.31 21.58L22.08 27.36L23.02 28.29L24.33 26.98Z"
          fill="black"
        />
        <path
          d="M17.7 5.32L12.31 10.71L13.62 12.02L18.08 7.56V16.1H19.95V7.56L24.41 12.02L25.72 10.71L19.95 4.93L19.02 4L17.7 5.32Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.02002 12.05H9.02002V16.6698L13.4126 15.2401L14.0316 17.1419L9.63326 18.5734L12.3539 22.319L10.7357 23.4944L8.01887 19.7541L5.29802 23.496L3.68042 22.3198L6.40037 18.5791L1.99719 17.1479L2.61539 15.2459L7.02002 16.6776V12.05ZM8.01612 18.0538L8.01815 18.0524L8.01738 18.05H8.0128L8.01242 18.0512L8.01612 18.0538Z"
          fill="#479DBF"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect x="2" y="4" width="27.72" height="24.29" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
