import { styled } from "../../utils/Theme";
import { InputType } from ".";

export const InputWrapper = styled.div<{ type: InputType }>`
  ${({ type, theme }) => {
    return `display: flex;
          flex-direction: row;
          align-items: center;
          padding: 7.5px 0px;
      
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
