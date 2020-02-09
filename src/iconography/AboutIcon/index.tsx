import React from "react"

export const AboutIcon: React.SFC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <circle cx="16" cy="16" r="11" stroke="#333333" strokeWidth="2" />
      <rect x="15" y="14" width="2" height="9" fill="#333333" />
      <rect x="15" y="10" width="2" height="2" fill="#333333" />
    </svg>
  )
}
