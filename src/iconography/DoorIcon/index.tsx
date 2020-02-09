import React from "react"

export const DoorIcon: React.SFC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path d="M25 6V26H16V6H25ZM27 4H14V28H27V4Z" fill="black" />
      <path d="M6 27.12V4.88001L19 3.14001V28.86L6 27.12Z" fill="white" />
      <path
        d="M18 4.28V27.71L7 26.25V5.75L18 4.28ZM20 2L5 4V28L20 30V2Z"
        fill="black"
      />
      <path d="M17 14H15V17H17V14Z" fill="black" />
    </svg>
  )
}
