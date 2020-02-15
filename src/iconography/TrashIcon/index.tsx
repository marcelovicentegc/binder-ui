import React from "react";

export const TrashIcon: React.SFC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="trashIcon"
      {...props}
    >
      <path
        d="M24.81 9L23.17 27H8.83L7.19 9H24.81ZM27 7H5L7 29H25L27 7Z"
        fill="#262626"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 7H28.9989L28.9999 9H3.001L3 7Z"
        fill="#D86C30"
      />
      <path d="M17 12H15V24H17V12Z" fill="#262626" />
      <path
        d="M19.5242 11.936L18.4814 23.8904L20.4738 24.0642L21.5166 12.1098L19.5242 11.936Z"
        fill="#262626"
      />
      <path
        d="M12.4738 11.9355L10.4814 12.1097L11.5266 24.0641L13.519 23.8899L12.4738 11.9355Z"
        fill="#262626"
      />
      <path d="M19 5V7H13V5H19ZM21 3H11V9H21V3Z" fill="#D86C30" />
    </svg>
  );
};
