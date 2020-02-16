import React from "react";

export const TextBoxColorIcon: React.SFC<React.SVGProps<
  SVGSVGElement
>> = props => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="textBoxColorIcon"
      {...props}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M21.6336 21L19.7513 15.9828H12.1681L10.2857 21H8L14.5613 4H17.4387L24 21H21.6336ZM16.0134 5.89971H15.879L12.7059 14.1805H19.1866L16.0134 5.89971Z"
          fill="#262626"
        />
        <path
          fillRule={props.color ? "nonzero" : "evenodd"}
          clipRule="evenodd"
          d="M28 23H4V29H28V23ZM26 25H6V27H26V25Z"
          fill={props.color ? props.color : "#262626"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 0V-1H6V0H4ZM4 2V11V13H6H9.08769L9.85961 11H6V2H4ZM26 2V11H22.1404L22.9123 13H26H28V11V2H26ZM28 0V-1H26V0H28Z"
          fill="#262626"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <path d="M0 0H32V32H0V0Z" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
