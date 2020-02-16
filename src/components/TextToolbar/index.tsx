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
import { BodyText, Spotlight } from "../../typography";
import { TypographyCardItems } from "./TypographyCardItems";
import { Card } from "../Card";
import { ArrowUpIcon } from "../../iconography/ArrowUpIcon";
import { CirclePicker } from "react-color";
import { TextBoxStyleCardContent } from "./TextBoxStyleCardContent";

export const TextToolbar: React.FC = () => {
  const [
    displayTypographySettings,
    setDisplayTypographySettings
  ] = React.useState(false);
  const [
    currentTypographySetting,
    setCurrentTypographySetting
  ] = React.useState(3);
  const [
    displayTextColorSettings,
    setDisplayTextColorSettings
  ] = React.useState(false);
  const [currentTextColorSetting, setCurrentTextColorSetting] = React.useState(
    ""
  );
  const [
    displayTextBoxColorSettings,
    setDisplayTextBoxColorSettings
  ] = React.useState(false);
  const [
    currentTextBoxColorSetting,
    setCurrentTextBoxColorSetting
  ] = React.useState("");
  const [
    displayTextBoxStyleSettings,
    setDisplayTextBoxStyleSettings
  ] = React.useState(false);
  const [
    currentTextBoxStyleSetting,
    setCurrentTextBoxStyleSetting
  ] = React.useState("");

  const colors = [
    // gray scale
    "#E9E9E9",
    "#C4C4C4",
    "#999999",
    "#4C4C4C",
    "#262626",
    // red scale
    "#D24654",
    "#BB3B46",
    "#A52F38",
    "#831D23",
    // orange scale
    "#EBA248",
    "#E2873C",
    "#D86C30",
    "#C9441E",
    "#C43618",
    // yellow scale
    "#F4DA4E",
    "#EFC841",
    "#EAB634",
    "#DA7F0D",
    // green scale
    "#5DC957",
    "#4DAE48",
    "#3E933A",
    "#276B24",
    "#0F420E",
    // blue scale
    "#6ACEDF",
    "#59B5CF",
    "#479DBF",
    "#3584AF",
    "#12538F"
  ];

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
        <ToolbarItemWrapper
          onClick={() => {
            setDisplayTextColorSettings(!displayTextColorSettings);
            setDisplayTextBoxColorSettings(false);
            setDisplayTextBoxStyleSettings(false);
          }}
        >
          <TextColorIcon color={currentTextColorSetting} />
          {displayTextColorSettings ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </ToolbarItemWrapper>
        <Separator verticalMargin={6} />
        <ToolbarItemWrapper
          onClick={() => {
            setDisplayTextBoxStyleSettings(!displayTextBoxStyleSettings);
            setDisplayTextBoxColorSettings(false);
            setDisplayTextColorSettings(false);
          }}
        >
          <TextBoxIcon />
          {displayTextBoxStyleSettings ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </ToolbarItemWrapper>
        <ToolbarItemWrapper
          onClick={() => {
            setDisplayTextBoxColorSettings(!displayTextBoxColorSettings);
            setDisplayTextColorSettings(false);
            setDisplayTextBoxStyleSettings(false);
          }}
        >
          <TextBoxColorIcon color={currentTextBoxColorSetting} />
          {displayTextBoxColorSettings ? <ArrowUpIcon /> : <ArrowDownIcon />}
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
        {displayTextColorSettings && !displayTextBoxColorSettings && (
          <Card
            cardProps={{
              style: {
                position: "absolute",
                left: 395,
                top: 8
              }
            }}
          >
            <Spotlight>Cor do texto</Spotlight>
            <Separator invisible />
            <CirclePicker
              color={currentTextColorSetting}
              colors={colors}
              onChangeComplete={color => setCurrentTextColorSetting(color.hex)}
            />
          </Card>
        )}
        {displayTextBoxColorSettings && !displayTextColorSettings && (
          <Card
            cardProps={{
              style: {
                position: "absolute",
                left: 340,
                top: 8
              }
            }}
          >
            <Spotlight>Preenchimento</Spotlight>
            <Separator invisible />
            <CirclePicker
              color={currentTextBoxColorSetting}
              colors={colors}
              onChangeComplete={color =>
                setCurrentTextBoxColorSetting(color.hex)
              }
            />
          </Card>
        )}
        {displayTextBoxStyleSettings &&
          !displayTextColorSettings &&
          !displayTextBoxColorSettings && (
            <Card
              cardProps={{
                style: {
                  position: "absolute",
                  left: 470,
                  top: 8
                }
              }}
            >
              <Spotlight>Estilos de caixa de texto</Spotlight>
              <Separator invisible />
              <TextBoxStyleCardContent />
            </Card>
          )}
      </MenuArea>
    </>
  );
};
