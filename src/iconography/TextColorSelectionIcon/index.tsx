import React from "react";

export const TextColorSelectionIcon: React.SFC<React.SVGProps<
  SVGSVGElement
>> = props => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="textColorSelectionIcon"
      {...props}
    >
      <rect x="4" y="23" width="24" height="6" fill="#6F58AB" />
      <path
        d="M21.6336 21L19.7513 15.9828H12.1681L10.2857 21H8L14.5613 4H17.4387L24 21H21.6336ZM16.0134 5.89971H15.879L12.7059 14.1805H19.1866L16.0134 5.89971Z"
        fill="#6F58AB"
      />
    </svg>
  );
};
