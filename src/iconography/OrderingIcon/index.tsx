import React from "react"

export const OrderingIcon: React.SFC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23.9729 24.5327L30 18.5499L28.5323 17.093L23.5357 22.0425V8H21.4538V22.0425L16.4677 17.093L15 18.5499L21.4538 24.9667L22.4948 26L23.9729 24.5327Z"
        fill="black"
      />
      <path
        d="M8.02707 7.46728L2 13.4501L3.46773 14.907L8.46426 9.95752L8.46426 24L10.5462 24L10.5462 9.95752L15.5323 14.907L17 13.4501L10.5462 7.03329L9.50521 6L8.02707 7.46728Z"
        fill="#479DBF"
      />
    </svg>
  )
}
