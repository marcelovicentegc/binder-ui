import React from "react";
import { StyledTextToolbar, ToolbarItemWrapper, MenuArea } from "./style";
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
import { TypographyCardItems } from "./TypographyCardItems";
import { Card } from "../Card";
import { ArrowUpIcon } from "../../iconography/ArrowUpIcon";

export const TextToolbar: React.FC = () => {
  const [
    displayTypographySettings,
    setDisplayTypographySettings
  ] = React.useState(false);
  const [
    currentTypographySetting,
    setCurrentTypographySetting
  ] = React.useState(3);

  return (
    <>
      <StyledTextToolbar>
        <ToolbarItemWrapper>
          <UndoChangesIcon />
        </ToolbarItemWrapper>
        <ToolbarItemWrapper>
          <RedoChangesIcon />
        </ToolbarItemWrapper>
        <Separator verticalMargin={6} />
        <ToolbarItemWrapper
          onClick={() =>
            setDisplayTypographySettings(!displayTypographySettings)
          }
        >
          <BodyText>Corpo de texto</BodyText>
          {displayTypographySettings ? <ArrowUpIcon /> : <ArrowDownIcon />}
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
      <MenuArea>
        {displayTypographySettings && (
          <Card
            cardProps={{
              style: {
                position: "absolute",
                left: 75,
                top: 8,
                minWidth: 150
              }
            }}
          >
            <TypographyCardItems
              currentItem={currentTypographySetting}
              setCurrentItem={currentItem =>
                setCurrentTypographySetting(currentItem)
              }
            />
          </Card>
        )}
      </MenuArea>
    </>
  );
};
