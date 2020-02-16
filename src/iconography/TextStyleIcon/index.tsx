import React from "react";

export const TextStyleIcon: React.SFC<React.SVGProps<
  SVGSVGElement
>> = props => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="textStyleIcon"
      {...props}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M3.45719 7.28307L1.71469 18.1918L6.55972 19.4266L5.32498 24.2716L7.26106 24.7661L8.49581 19.921L13.3408 21.1558L17.029 10.7387L3.45719 7.28307ZM12.0652 18.7617L3.97646 16.7042L5.08956 9.76385L6.84455 10.2053L5.60981 15.0504L7.54589 15.5448L8.78064 10.6998L10.7167 11.1942L9.48198 16.0392L11.4181 16.5337L12.6528 11.6886L14.4078 12.1301L12.0652 18.7617Z"
          fill="#CC3E78"
        />
        <path
          d="M27.6336 26L25.7513 20.9828H18.1681L16.2857 26H14L20.5613 9H23.4387L30 26H27.6336ZM22.0134 10.8997H21.879L18.7059 19.1805H25.1866L22.0134 10.8997Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <path d="M0 0H32V32H0V0Z" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
