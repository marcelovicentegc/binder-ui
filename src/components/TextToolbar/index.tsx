import React from "react";
import {
  StyledTextToolbar,
  ToolbarItemWrapper,
  MenuArea,
  ItemWrapper
} from "./style";
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
  ArrowDownIcon,
  SuccessArrowIcon
} from "../../iconography";
import { Separator } from "../Separator";
import { BodyText, Spotlight, Legend3, Legend2 } from "../../typography";
import { TypographyCardItems } from "./TypographyCardItems";
import { Card } from "../Card";
import { ArrowUpIcon } from "../../iconography/ArrowUpIcon";
import { CirclePicker } from "react-color";
import { TextBoxStyleCardContent, StrokeType } from "./TextBoxStyleCardContent";
import { generateKey } from "../../utils/generateKey";
import { Column } from "../../base/Flex";
import { palette } from "../../utils/palette";

interface ScopeInterface {
  [key: string]: string;
}

export interface TextToolbarProps {
  bodyText?: {
    label: string;
    options: string[];
  };
  textStyle?: {
    menuTitle: string;
    scopes: ScopeInterface[];
    options: {
      scope: keyof ScopeInterface;
      fontFamily: string;
    }[];
  };
  textColor?: {
    menuTitle: string;
    color: string;
    onChange: (color: string) => void;
  };
  textBoxColor?: {
    menuTitle: string;
    color: string;
    onChange: (color: string) => void;
  };
  textBoxStyle?: {
    menuTitle: string;
  };
  withDrawOption?: {
    onClick: () => void;
  };
}

export const TextToolbar: React.FC<TextToolbarProps> = ({
  bodyText,
  textStyle,
  textColor,
  textBoxColor,
  textBoxStyle,
  withDrawOption
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
  const [currentTextStyleSetting, setCurrentTextStyleSetting] = React.useState({
    key: 3,
    fontFamily: "Domine",
    scope: "classics"
  });
  const [
    displayTextColorSettings,
    setDisplayTextColorSettings
  ] = React.useState(false);
  const [
    displayTextBoxColorSettings,
    setDisplayTextBoxColorSettings
  ] = React.useState(false);
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
  const typographyToolbarItemRef = React.useRef<HTMLDivElement>();

  const renderTextStyles = () => {
    const scopes: React.ReactNode[] = [];
    const stylesByScope: { fragments: React.ReactNode[]; scope: string }[] = [];

    textStyle.scopes.map(scope => {
      const scopeKey = Object.keys(scope)[0];

      textStyle.options.map((option, optionIndex) => {
        if (option.scope === scopeKey) {
          stylesByScope.push({
            scope: scopeKey,
            fragments: [
              <ItemWrapper
                key={generateKey(20)}
                onClick={() =>
                  setCurrentTextStyleSetting({
                    key: optionIndex,
                    scope: option.scope as string,
                    fontFamily: option.fontFamily
                  })
                }
                isSelectedItem={
                  currentTextStyleSetting.key === optionIndex &&
                  currentTextStyleSetting.scope === option.scope &&
                  currentTextStyleSetting.fontFamily === option.fontFamily
                }
              >
                <Column>
                  <span>ABC abc 123 !?%</span>
                  <Legend2>{option.fontFamily}</Legend2>
                </Column>
                {currentTextStyleSetting.key === optionIndex &&
                  currentTextStyleSetting.scope === option.scope &&
                  currentTextStyleSetting.fontFamily === option.fontFamily && (
                    <SuccessArrowIcon color={"black"} />
                  )}
                {optionIndex + 1 !== textStyle.options.length && (
                  <Separator gray />
                )}
              </ItemWrapper>
            ]
          });
        }
      });

      scopes.push(
        <React.Fragment key={generateKey(20)}>
          <Separator invisible />
          <Legend3>{Object.values(scope)[0]}</Legend3>
          <Separator invisible />
          {stylesByScope.map(styles => {
            if (styles.scope === scopeKey) {
              return styles.fragments;
            }
          })}
        </React.Fragment>
      );
    });

    return scopes;
  };

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
              ref={typographyToolbarItemRef}
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
            ref={textStyleToolbarItemRef}
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
              <TextColorIcon color={textColor.color} />
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
              <TextBoxColorIcon color={textBoxColor.color} />
              {displayTextBoxColorSettings ? (
                <ArrowUpIcon />
              ) : (
                <ArrowDownIcon />
              )}
            </ToolbarItemWrapper>
          </>
        )}
        {withDrawOption && (
          <>
            <Separator verticalMargin={6} />
            <ToolbarItemWrapper onClick={withDrawOption.onClick}>
              <DrawIcon />
            </ToolbarItemWrapper>
          </>
        )}
      </StyledTextToolbar>
      <MenuArea>
        {displayTypographySettings && (
          <Card
            cardProps={{
              style: {
                position: "absolute",
                left: typographyToolbarItemRef.current.offsetLeft - 20,
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
          <Card
            cardProps={{
              style: {
                position: "absolute",
                left: textStyleToolbarItemRef.current.offsetLeft - 20,
                top: 8,
                minWidth: 256
              }
            }}
          >
            <Spotlight>{textStyle.menuTitle}</Spotlight>
            <Separator invisible />
            {renderTextStyles()}
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
              color={textColor.color}
              colors={palette}
              onChangeComplete={color => {
                textColor.onChange(color.hex);
              }}
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
              color={textBoxColor.color}
              colors={palett}
              onChangeComplete={color => {
                textBoxColor.onChange(color.hex);
              }}
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
