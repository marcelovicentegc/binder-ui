import { styled } from "../../utils/Theme";
import { ButtonType, ButtonSize } from ".";
import { Mode } from "../../utils/generics";

export interface StyledButtonProps {
  withIcon?: boolean;
  withSecondaryIcon?: boolean;
  buttonType?: ButtonType;
  buttonSize?: ButtonSize;
  mode?: Mode;
}

const StyledButtonBase = styled.button`
  ${({ theme }) => {
    return `
    backdrop-filter: blur(22px);
    border: none;
    background-color: ${theme.color.gray10};
    opacity: 0.95;
    border-radius: 28px;
    height: 39px;
    width: auto;
    padding: 0px 16px;
    cursor: pointer;
    transition: .2s;
    outline: none;

    &:hover {
      background: ${theme.color.white2};
    }
    
    span {
      font-size: 16px;
      line-height: 29px;
      letter-spacing: -0.38px;
    }

    svg { 
      max-height: 20px;
      max-width: 20px;
    }
    `;
  }}
`;

export const StyledButton = styled(StyledButtonBase)<StyledButtonProps>`
  ${({ theme, withIcon, withSecondaryIcon, buttonType, mode, buttonSize }) => {
    return ` 
    ${buttonSize === ButtonSize.small ? "height: 31px" : ""}
    
    ${
      buttonType === ButtonType.primary && mode === Mode.dark
        ? `
      background: ${theme.color.black2};
      border-color: ${theme.color.gray7};

      span {
        color: ${theme.color.gray8};
      }

      &:hover { 
        background: ${theme.color.gray9};
      }
    `
        : ""
    }

    ${
      buttonType === ButtonType.secondary
        ? `backdrop-filter: blur(2px);
    border: 2px solid ${theme.color.gray2};
    background: white;
    
    &:hover {
      background: white;
      backdrop-filter: none;
      box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15);
    }`
        : ""
    }

    ${
      buttonType === ButtonType.secondary && mode === Mode.dark
        ? `backdrop-filter: blur(2px);
        border: 2px solid ${theme.color.gray7};
        background: ${theme.color.black2};

        span {
          color: ${theme.color.gray8};
        }

        &:hover { 
          backdrop-filter: none;
          background: ${theme.color.black2};
          box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15);
        }
    `
        : ""
    }

    ${
      buttonType === ButtonType.tertiary
        ? `border: none;
      background: none;

      &:hover {
        background: none;
      }

      span {
        line-height: 140.62%;
      }
  `
        : ""
    } 

    ${
      buttonType === ButtonType.quaternary
        ? `text-decoration: underline;
      border: none;
      background: none;

    &:hover {
      background: none;
    }

    span {
      line-height: 125%;
      font-weight: bold;
    }
  `
        : ""
    } 
  
    ${
      buttonType === ButtonType.round
        ? `background: rgba(255, 255, 255, 0.8);
      border: 2px solid #cccccc;
      box-sizing: border-box;
      backdrop-filter: blur(4px);
      border-radius: 31px;
      width: 56px;
      height: 56px;
      opacity: 1;

      &:hover { 
        border: 2px solid ${theme.color.white2};
      }
    `
        : ""
    }
  
    ${
      withIcon
        ? `
        ${
          buttonType !== ButtonType.round
            ? `display: flex; 
        justify-content: center; 
        align-items: center; `
            : ""
        }

        svg:first-child {
        ${
          buttonType === ButtonType.round
            ? "margin-right: 0px;"
            : "margin-right: 5px;"
        }
      }
  
      div:first-child {
        width: 18px;
        margin-right: 16px;
      }`
        : ""
    }
  
    ${withSecondaryIcon &&
      `
      ${
        buttonType !== ButtonType.round
          ? `display: flex; 
    justify-content: center; 
    align-items: center; `
          : ""
      }

      svg:last-child {
        margin-left: 5px;
      }`}`;
  }}
`;
