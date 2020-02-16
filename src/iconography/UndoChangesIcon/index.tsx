import React from "react";

export const UndoChangesIcon: React.SFC<React.SVGProps<
  SVGSVGElement
>> = props => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="undoChangesIcon"
      {...props}
    >
      <path
        d="M19.94 8.73C18.39 7.02 16.27 6.16 14.15 6.16V6.15H3.76001L8.46001 1.4L7.07001 0L0.980009 6.15L9.53674e-06 7.14L1.39001 8.54L7.08001 14.28L8.47001 12.88L3.77001 8.13H14.15V8.15C15.75 8.15 17.34 8.78 18.5 10.06C20.69 12.48 20.53 16.25 18.13 18.46C16.99 19.5 15.57 20 14.15 20V20.02H7.28001V22H14.15V21.99C16.04 21.99 17.94 21.31 19.45 19.92C22.65 16.97 22.87 11.96 19.94 8.73Z"
        fill="black"
      />
    </svg>
  );
};
