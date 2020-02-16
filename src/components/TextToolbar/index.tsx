import React from "react";
import { StyledTextToolbar } from "./style";
import {
  UndoChangesIcon,
  RedoChangesIcon,
  IncreaseIndentIcon,
  DecreaseIndentIcon,
  TextStyleIcon,
  TextColorIcon,
  TextColorSelectionIcon,
  TextBoxIcon,
  TextBoxColorIcon,
  TextBoxColorSelectionIcon,
  FormatTextBoxIcon,
  DrawIcon,
  TextIcon
} from "../../iconography";
import { Separator } from "../Separator";
import { BodyText } from "../../typography";

export const TextToolbar: React.FC = () => {
  return (
    <StyledTextToolbar>
      <UndoChangesIcon />
      <RedoChangesIcon />
      <Separator verticalMargin={6} />
      <BodyText>Corpo de texto</BodyText>
      <Separator verticalMargin={6} />
      <TextStyleIcon />
      <IncreaseIndentIcon />
      <DecreaseIndentIcon />
      <TextColorIcon />
      <Separator verticalMargin={6} />
      <TextBoxIcon />
      <TextBoxColorIcon />
      <Separator verticalMargin={6} />
      <DrawIcon />
    </StyledTextToolbar>
  );
};
