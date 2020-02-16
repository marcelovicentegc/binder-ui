import React from "react";

export const TextIcon: React.SFC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="textIcon"
      {...props}
    >
      <rect x="15" y="4" width="14" height="2" fill="#EAB634" />
      <rect x="15" y="26" width="14" height="2" fill="#EAB634" />
      <rect
        x="23"
        y="6"
        width="20"
        height="2"
        transform="rotate(90 23 6)"
        fill="#EAB634"
      />
      <path
        d="M14.86 23C13.9827 23 13.3573 22.776 12.984 22.328C12.6107 21.88 12.3773 21.32 12.284 20.648H12.144C11.8267 21.488 11.3133 22.1507 10.604 22.636C9.91333 23.1027 8.97999 23.336 7.80399 23.336C6.29199 23.336 5.08799 22.944 4.19199 22.16C3.29599 21.376 2.84799 20.3027 2.84799 18.94C2.84799 17.596 3.33333 16.56 4.30399 15.832C5.29333 15.104 6.87999 14.74 9.06399 14.74H12.144V13.312C12.144 12.248 11.8453 11.4547 11.248 10.932C10.6507 10.3907 9.80133 10.12 8.69999 10.12C7.72933 10.12 6.93599 10.316 6.31999 10.708C5.70399 11.0813 5.20933 11.5947 4.83599 12.248L3.32399 11.128C3.51066 10.7547 3.76266 10.3907 4.07999 10.036C4.39733 9.68134 4.78933 9.37334 5.25599 9.112C5.72266 8.832 6.25466 8.61734 6.85199 8.468C7.44933 8.3 8.11199 8.216 8.83999 8.216C10.5387 8.216 11.8827 8.64534 12.872 9.504C13.88 10.3627 14.384 11.5573 14.384 13.088V21.04H16.4V23H14.86ZM8.19599 21.46C8.77466 21.46 9.29733 21.3947 9.76399 21.264C10.2493 21.1147 10.6693 20.928 11.024 20.704C11.3787 20.4613 11.6493 20.1813 11.836 19.864C12.0413 19.528 12.144 19.1733 12.144 18.8V16.42H9.06399C7.71999 16.42 6.73999 16.6067 6.12399 16.98C5.50799 17.3533 5.19999 17.8947 5.19999 18.604V19.192C5.19999 19.9387 5.46133 20.508 5.98399 20.9C6.52533 21.2733 7.26266 21.46 8.19599 21.46Z"
        fill="#262626"
      />
    </svg>
  );
};