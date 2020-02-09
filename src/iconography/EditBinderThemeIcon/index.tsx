import React from "react"

export const EditBinderThemeIcon: React.SFC<React.SVGProps<
  SVGSVGElement
>> = props => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M18 11H9V13H18V11Z" fill="#262626" />
      <path d="M6 26H4.01H4V29H4.01H6H27.01V26H6Z" fill="#B24E1A" />
      <path
        d="M6 9H8H10H19C20.1 9 21 9.9 21 11V20V24H23V22V11C23 8.79 21.21 7 19 7H10H8H6.91L8 5.91L8.91 5H10H11H23C24.1 5 25 5.9 25 7V22V24H27V7C27 4.79 25.21 3 23 3H11H8V3.09L4.09 7H4V24H6V9Z"
        fill="#262626"
      />
    </svg>
  )
}
