import React from "react"

export const BackArrowIcon: React.SFC<React.SVGProps<
  SVGSVGElement
>> = props => {
  return (
    <svg
      width="9"
      height="14"
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.41414 7.00008L8.70703 1.70718L7.29282 0.292969L0.585711 7.00008L7.29282 13.7072L8.70703 12.293L3.41414 7.00008Z"
        fill="black"
      />
    </svg>
  )
}
