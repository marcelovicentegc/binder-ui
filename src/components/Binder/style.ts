import { styled } from "../../utils/Theme";
import { BinderSize } from ".";

export const FigureWrapper = styled.div<{ size?: BinderSize }>`
  width: ${({ size }) => (size ? size : BinderSize.small)};
`;

export const Figure = styled.figure<{
  disabled?: boolean;
  carouselMode?: boolean;
  backgroundColor?: string;
}>`
  border-bottom-right-radius: 35px;
  border-top-right-radius: 35px;
  margin: 0;
  height: 0;
  padding-top: 129.79351032448378%;
  overflow: hidden;
  position: relative;
  transition: 0.2s;
  width: 100%;
  ${({ backgroundColor }) =>
    backgroundColor
      ? `background-color: ${backgroundColor};`
      : "background-color: #fff;"}
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:hover {
    @for $i from 1 through 50 {
      &:nth-child(1n + #{$i}) {
        transform: rotate(random(10) - 5 + deg);
      }
    }

    ${({ disabled }) => `${disabled ? "transform: unset;" : ""}`}
  }

  .carouselBinder {
    margin: 0 15px !important;
  }
`;

export const Image = styled.img<{ disabled?: boolean }>`
  width: 100%;
  position: absolute;
  top: 0;
  ${({ disabled }) => `cursor: ${disabled ? "default" : "pointer"};`}
`;

export const FigCaption = styled.figcaption<{ disabled?: boolean }>`
  width: 100%;
  position: absolute;
  top: 66px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ disabled }) => `cursor: ${disabled ? "default" : "pointer"};
  
 &  > span:last-child {
    text-align: center;
  }
  `}
`;
