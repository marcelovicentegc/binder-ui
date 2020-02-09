import { styled } from "../../utils/Theme";
import { InputType } from ".";

export const InputWrapper = styled.div<{ type: InputType }>`
  ${({ type, theme }) => {
    return `display: flex;
          flex-direction: column;
          padding: 7.5px 0px;
          
          input {
            outline: none;
            padding: 9px 15px;
            border-radius: 5px;
            box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);
            border: solid 1.5px transparent;
            background-color: #ffffff;
            transition: 0.2s;
            width: 100%;
            margin-left: 0px;
      
            &:focus {
              border: solid 1.5px #202020;
            }
          }
    
      
        ${
          type === InputType.secondary
            ? `padding: 25px 16px;
          border-bottom: 1px solid ${theme.color.gray5};
          font-style: normal;
          font-size: 18px;
          line-height: 140.62%;
        
          input {
            font-style: inherit;
            font-size: inherit;
            line-height: inherit;
            border: none;
            box-shadow: none;
            color: ${theme.color.gray4};
            font-weight: normal;
            margin-left: 12px;

            &:focus {
              border: none;
            }
          }`
            : ""
        }
        `;
  }}
`;

export const LabelWrapper = styled.div``;
