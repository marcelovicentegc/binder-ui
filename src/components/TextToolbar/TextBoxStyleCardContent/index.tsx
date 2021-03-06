import React from "react";
import { Rectangule } from "./style";
import { Separator } from "../../Separator";
import { theme } from "../../../utils/Theme";
import { SelectedIcon } from "../../../iconography";
import { Legend2 } from "../../../typography";

export enum StrokeType {
  default,
  solid,
  dashed
}

interface TextBoxStyleCardContentProps {
  setSelectedStroke: (selectedStroke: StrokeType) => void;
  selectedStroke: StrokeType;
}

export const TextBoxStyleCardContent: React.FC<TextBoxStyleCardContentProps> = ({
  selectedStroke,
  setSelectedStroke
}) => {
  const separators = (firstRow?: boolean) => {
    return (
      <>
        {firstRow && <Separator gray />}
        <Separator invisible />
      </>
    );
  };

  const dashedStroke = (
    <Rectangule
      dashed
      strokeHex={theme.color.blue2}
      onClick={() => setSelectedStroke(StrokeType.dashed)}
    />
  );

  const solidStroke = (
    <Rectangule
      strokeHex={theme.color.red3}
      onClick={() => setSelectedStroke(StrokeType.solid)}
    />
  );

  const defaultStroke = (
    <Rectangule onClick={() => setSelectedStroke(StrokeType.default)} />
  );

  const orderedStyleOptions = () => {
    if (selectedStroke === StrokeType.default) {
      return (
        <>
          <Rectangule>
            <SelectedIcon />
          </Rectangule>
          <Legend2>Styleless (white)</Legend2>
          {separators(true)}
          {solidStroke}
          {separators()}
          {dashedStroke}
        </>
      );
    } else if (selectedStroke === StrokeType.solid) {
      return (
        <>
          <Rectangule strokeHex={theme.color.red3}>
            <SelectedIcon />
          </Rectangule>
          <Legend2>Solid stroke</Legend2>
          {separators(true)}
          {dashedStroke}
          {separators()}
          {defaultStroke}
        </>
      );
    } else if (selectedStroke === StrokeType.dashed) {
      return (
        <>
          <Rectangule dashed strokeHex={theme.color.blue2}>
            <SelectedIcon />
          </Rectangule>
          <Legend2>Dashed stroke</Legend2>
          {separators(true)}
          {solidStroke}
          {separators()}
          {defaultStroke}
        </>
      );
    }
  };

  return orderedStyleOptions();
};
