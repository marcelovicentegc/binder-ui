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
import { TextBoxStyleCardContent, StrokeType } from "./TextBoxStyleCardContent";

interface ScopeInterface {
  [key: string]: string;
}

interface TextToolbarProps {
  bodyText?: {
    label: string;
    options: string[];
  };
  textStyle?: {
    menuTitle: string;
    scopes: ScopeInterface[];
    options: {
      scope: keyof ScopeInterface[];
      fontFamily: string;
    };
  };
  textColor?: {
    menuTitle: string;
  };
  textBoxColor?: {
    menuTitle: string;
  };
  textBoxStyle?: {
    menuTitle: string;
  };
}

export const TextToolbar: React.FC<TextToolbarProps> = ({
  bodyText,
  textStyle,
  textColor,
  textBoxColor,
  textBoxStyle
}) => {
  const [
    displayTypographySettings,
    setDisplayTypographySettings
  ] = React.useState(false);
  const [
    currentTypographySetting,
    setCurrentTypographySetting
  ] = React.useState(3);
  const [
    displayTextStyleSettings,
    setDisplayTextStyleSettings
  ] = React.useState(false);
  const [currentTextStyleSetting, setCurrentTextStyleSetting] = React.useState(
    ""
  );
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
  ] = React.useState(StrokeType.default);
  const textColorToolbarItemRef = React.useRef<HTMLDivElement>();
  const textStyleToolbarItemRef = React.useRef<HTMLDivElement>();
  const textBoxStyleToolbarItemRef = React.useRef<HTMLDivElement>();
  const textBoxColorToolbarItemRef = React.useRef<HTMLDivElement>();

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
        {bodyText && (
          <>
            <ToolbarItemWrapper
              onClick={() => {
                setDisplayTypographySettings(!displayTypographySettings);
                setDisplayTextStyleSettings(false);
                setDisplayTextBoxColorSettings(false);
                setDisplayTextBoxStyleSettings(false);
                setDisplayTextColorSettings(false);
              }}
            >
              <BodyText>{bodyText.label}</BodyText>
              {displayTypographySettings ? <ArrowUpIcon /> : <ArrowDownIcon />}
            </ToolbarItemWrapper>
            <Separator verticalMargin={6} />
          </>
        )}
        {textStyle && (
          <ToolbarItemWrapper
            onClick={() => {
              setDisplayTextStyleSettings(!displayTextStyleSettings);
              setDisplayTypographySettings(false);
              setDisplayTextBoxColorSettings(false);
              setDisplayTextBoxStyleSettings(false);
              setDisplayTextColorSettings(false);
            }}
          >
            <TextStyleIcon />
            {displayTextStyleSettings ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </ToolbarItemWrapper>
        )}
        <IncreaseIndentIcon />
        <DecreaseIndentIcon />
        {textColor && (
          <>
            <ToolbarItemWrapper
              ref={textColorToolbarItemRef}
              onClick={() => {
                setDisplayTextColorSettings(!displayTextColorSettings);
                setDisplayTextBoxColorSettings(false);
                setDisplayTextBoxStyleSettings(false);
                setDisplayTypographySettings(false);
                setDisplayTextStyleSettings(false);
              }}
            >
              <TextColorIcon color={currentTextColorSetting} />
              {displayTextColorSettings ? <ArrowUpIcon /> : <ArrowDownIcon />}
            </ToolbarItemWrapper>
            {(textBoxStyle || textBoxColor) && <Separator verticalMargin={6} />}
          </>
        )}
        {textBoxStyle && (
          <>
            <ToolbarItemWrapper
              ref={textBoxStyleToolbarItemRef}
              onClick={() => {
                setDisplayTextBoxStyleSettings(!displayTextBoxStyleSettings);
                setDisplayTextBoxColorSettings(false);
                setDisplayTextColorSettings(false);
                setDisplayTypographySettings(false);
                setDisplayTextStyleSettings(false);
              }}
            >
              <TextBoxIcon />
              {displayTextBoxStyleSettings ? (
                <ArrowUpIcon />
              ) : (
                <ArrowDownIcon />
              )}
            </ToolbarItemWrapper>
          </>
        )}
        {textBoxColor && (
          <>
            <ToolbarItemWrapper
              onClick={() => {
                setDisplayTextBoxColorSettings(!displayTextBoxColorSettings);
                setDisplayTextColorSettings(false);
                setDisplayTextBoxStyleSettings(false);
                setDisplayTypographySettings(false);
                setDisplayTextStyleSettings(false);
              }}
              ref={textBoxColorToolbarItemRef}
            >
              <TextBoxColorIcon color={currentTextBoxColorSetting} />
              {displayTextBoxColorSettings ? (
                <ArrowUpIcon />
              ) : (
                <ArrowDownIcon />
              )}
            </ToolbarItemWrapper>
          </>
        )}
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
              labels={bodyText.options}
            />
          </Card>
        )}
        {displayTextStyleSettings && (
          <Card>
            <Spotlight>{textStyle.menuTitle}</Spotlight>
            <Separator invisible />
          </Card>
        )}
        {displayTextColorSettings && (
          <Card
            cardProps={{
              style: {
                position: "absolute",
                left: textColorToolbarItemRef.current.offsetLeft - 20,
                top: 8
              }
            }}
          >
            <Spotlight>{textColor.menuTitle}</Spotlight>
            <Separator invisible />
            <CirclePicker
              color={currentTextColorSetting}
              colors={colors}
              onChangeComplete={color => setCurrentTextColorSetting(color.hex)}
            />
          </Card>
        )}
        {displayTextBoxColorSettings && (
          <Card
            cardProps={{
              style: {
                position: "absolute",
                left: textBoxColorToolbarItemRef.current.offsetLeft - 200,
                top: 8
              }
            }}
          >
            <Spotlight>{textBoxColor.menuTitle}</Spotlight>
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
        {displayTextBoxStyleSettings && (
          <Card
            cardProps={{
              style: {
                position: "absolute",
                left: textBoxStyleToolbarItemRef.current.offsetLeft - 20,
                top: 8
              }
            }}
          >
            <Spotlight>{textBoxStyle.menuTitle}</Spotlight>
            <Separator invisible />
            <TextBoxStyleCardContent
              selectedStroke={currentTextBoxStyleSetting}
              setSelectedStroke={selectedStroke =>
                setCurrentTextBoxStyleSetting(selectedStroke)
              }
            />
          </Card>
        )}
      </MenuArea>
    </>
  );
};
