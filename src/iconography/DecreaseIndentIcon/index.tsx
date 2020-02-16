import React from "react";

export const DecreaseIndentIcon: React.SFC<React.SVGProps<
  SVGSVGElement
>> = props => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="decreaseIndentIcon"
      {...props}
    >
      <path
        d="M3.41001 16.8L9.20001 11L10.62 12.42L5.82001 17.21H17.41V19.21H5.82001L10.62 24L9.20001 25.42L3.00001 19.21L2.00001 18.21L3.41001 16.8Z"
        fill="#EAB634"
      />
      <rect x="2" y="7" width="28" height="2" fill="#262626" />
      <rect x="19" y="12" width="11" height="2" fill="#262626" />
      <rect x="19" y="17" width="11" height="2" fill="#262626" />
      <rect x="19" y="22" width="11" height="2" fill="#262626" />
    </svg>
  );
};
