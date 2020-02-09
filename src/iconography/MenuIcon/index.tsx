import React from "react"

export const MenuIcon: React.SFC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 60 60"
      {...props}
    >
      <g>
        <path
          d="M8,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S12.411,22,8,22z M8,36c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6   S11.309,36,8,36z"
          fill={props.color ? props.color : "#333333"}
        />
        <path
          d="M52,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S56.411,22,52,22z M52,36c-3.309,0-6-2.691-6-6s2.691-6,6-6   s6,2.691,6,6S55.309,36,52,36z"
          fill={props.color ? props.color : "#333333"}
        />
        <path
          d="M30,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,22,30,22z M30,36c-3.309,0-6-2.691-6-6s2.691-6,6-6   s6,2.691,6,6S33.309,36,30,36z"
          fill={props.color ? props.color : "#333333"}
        />
      </g>
    </svg>
  )
}
