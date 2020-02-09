import React from "react"

export const SuccessArrowIcon: React.SFC<React.SVGProps<
  SVGSVGElement
>> = props => {
  return (
    <svg
      width="13"
      height="10"
      viewBox="0 0 13 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.7072 1.70718L5.00008 9.41429L0.292969 4.70718L1.70718 3.29297L5.00008 6.58586L11.293 0.292969L12.7072 1.70718Z"
        fill={props.color ? props.color : "#3E933A"}
      />
    </svg>
  )
}
