import React from "react";

export const FileIcon: React.SFC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="fileIcon"
      {...props}
    >
      <path d="M23 13V25H9V13H23ZM25 11H7V27H25V11Z" fill="#479DBF" />
      <path d="M25 7V11H7V7H25ZM27 5H5V13H27V5Z" fill="#262626" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 16H20V18H12V16Z"
        fill="#262626"
      />
    </svg>
  );
};
