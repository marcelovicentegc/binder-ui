import React from "react";
import { StyledSelectedIcon } from "./style";
import { ArrowIcon } from "../ArrowIcon";

interface SelectedIconProps {
  dimension?: number;
}

export const SelectedIcon: React.SFC<SelectedIconProps> = ({ dimension }) => {
  return (
    <StyledSelectedIcon dimension={dimension} data-testid="selectedIcon">
      <ArrowIcon />
    </StyledSelectedIcon>
  );
};
