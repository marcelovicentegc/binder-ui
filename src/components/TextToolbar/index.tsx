import React from "react";
import { StyledTextToolbar, ToolbarItemWrapper } from "./style";
import {
  UndoChangesIcon,
  RedoChangesIcon,
  IncreaseIndentIcon,
  DecreaseIndentIcon,
  TextStyleIcon,
  TextColorIcon,
  TextBoxIcon,
  TextBoxColorIcon,
  DrawIcon,
  ArrowDownIcon
} from "../../iconography";
import { Separator } from "../Separator";
import { BodyText } from "../../typography";

export const TextToolbar: React.FC = () => {
  return (
    <StyledTextToolbar>
      <ToolbarItemWrapper>
        <UndoChangesIcon />
      </ToolbarItemWrapper>
      <ToolbarItemWrapper>
        <RedoChangesIcon />
      </ToolbarItemWrapper>
      <Separator verticalMargin={6} />
      <ToolbarItemWrapper>
        <BodyText>Corpo de texto</BodyText>
        <ArrowDownIcon />
      </ToolbarItemWrapper>
      <Separator verticalMargin={6} />
      <ToolbarItemWrapper>
        <TextStyleIcon />
        <ArrowDownIcon />
      </ToolbarItemWrapper>
      <IncreaseIndentIcon />
      <DecreaseIndentIcon />
      <ToolbarItemWrapper>
        <TextColorIcon />
        <ArrowDownIcon />
      </ToolbarItemWrapper>
      <Separator verticalMargin={6} />
      <ToolbarItemWrapper>
        <TextBoxIcon />
        <ArrowDownIcon />
      </ToolbarItemWrapper>
      <ToolbarItemWrapper>
        <TextBoxColorIcon />
        <ArrowDownIcon />
      </ToolbarItemWrapper>
      <Separator verticalMargin={6} />
      <DrawIcon />
    </StyledTextToolbar>
  );
};
