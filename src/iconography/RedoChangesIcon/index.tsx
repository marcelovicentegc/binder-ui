import React from "react";

export const RedoChangesIcon: React.SFC<React.SVGProps<
  SVGSVGElement
>> = props => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="redoChangesIcon"
      {...props}
    >
      <path
        d="M2.05999 8.73C3.60999 7.02 5.72999 6.16 7.84999 6.16V6.15H18.24L13.54 1.4L14.93 0L21.02 6.15L22 7.14L20.61 8.54L14.92 14.28L13.53 12.88L18.23 8.13H7.84999V8.15C6.24999 8.15 4.65999 8.78 3.49999 10.06C1.30999 12.48 1.46999 16.25 3.86999 18.46C5.00999 19.5 6.42999 20 7.84999 20V20.02H14.72V22H7.84999V21.99C5.95999 21.99 4.05999 21.31 2.54999 19.92C-0.650009 16.97 -0.870009 11.96 2.05999 8.73Z"
        fill="black"
      />
    </svg>
  );
};
