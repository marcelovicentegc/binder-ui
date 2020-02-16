import React from "react";

export const TextBoxIcon: React.SFC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="textBoxIcon"
      {...props}
    >
      <path
        d="M21.6336 28L19.7513 22.9828H12.1681L10.2857 28H8L14.5613 11H17.4387L24 28H21.6336ZM16.0134 12.8997H15.879L12.7059 21.1805H19.1866L16.0134 12.8997Z"
        fill="#262626"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 6H26V18H22.1404L22.9123 20H26H28V18V6V4H26H6H4V6V18V20H6H9.08769L9.85961 18H6V6Z"
        fill="#D86C30"
      />
    </svg>
  );
};
