import React from "react"

export const GradeIcon: React.SFC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 17H15V30H13V19H4V30H2V17Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 13V2H2V15H15V2H13V13H4Z"
        fill="#479DBF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 13V2H17V15H30V2H28V13H19Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 17H30V30H28V19H19V30H17V17Z"
        fill="#EAB634"
      />
    </svg>
  )
}
