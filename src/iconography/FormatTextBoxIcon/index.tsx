import React from "react";

export const FormatTextBoxIcon: React.SFC<React.SVGProps<
  SVGSVGElement
>> = props => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="formatTextBoxIcon"
      {...props}
    >
      <rect width="32" height="32" fill="none" />
      <path
        d="M9.0097 14.065L10.015 25.0662L15.0149 25.0663L15.0148 30.0662L17.0131 30.0672L17.0131 25.0673L22.013 25.0674L23.0146 14.0622L9.0097 14.065ZM20.1857 23.0624L11.8393 23.0661L11.2041 16.0659L13.0138 16.0603L13.0137 21.0602L15.0119 21.0612L15.012 16.0613L17.0102 16.0623L17.0102 21.0622L19.0084 21.0632L19.0085 16.0634L20.8181 16.0578L20.1857 23.0624Z"
        fill="#CC3E78"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 6H26V18H24.4742L24.2922 20H28V4H4V20H7.7348L7.55204 18H6V6Z"
        fill="#262626"
      />
      <rect x="8" y="9" width="16" height="2" fill="#262626" />
    </svg>
  );
};
