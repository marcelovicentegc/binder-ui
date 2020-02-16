import React from "react";

export const IncreaseIndentIcon: React.SFC<React.SVGProps<
  SVGSVGElement
>> = props => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="increaseIndentIcon"
      {...props}
    >
      <path
        d="M16 16.8L10.21 11L8.79002 12.42L13.59 17.21H2V19.21H13.59L8.79002 24L10.21 25.42L16.41 19.21L17.41 18.21L16 16.8Z"
        fill="#479DBF"
      />
      <rect x="2" y="7" width="28" height="2" fill="#262626" />
      <rect x="19" y="12" width="11" height="2" fill="#262626" />
      <rect x="19" y="17" width="11" height="2" fill="#262626" />
      <rect x="19" y="22" width="11" height="2" fill="#262626" />
    </svg>
  );
};
