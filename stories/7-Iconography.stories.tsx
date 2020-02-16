import React from "react";
import { storiesOf } from "@storybook/react";
import {
  AboutIcon,
  AlphabeticalOrderIcon,
  AlphabeticalOrderReverseIcon,
  ArrowDownIcon,
  ArrowIcon,
  BackArrowIcon,
  BellIcon,
  BinderIcon,
  BinderLogoIcon,
  DoorIcon,
  DragDropIcon,
  EditBinderCoverIcon,
  EditBinderIcon,
  EditBinderThemeIcon,
  EditUserIcon,
  FileIcon,
  GradeIcon,
  MenuIcon,
  MoveIcon,
  NewestIcon,
  NewIcon,
  OldestIcon,
  OrderingIcon,
  ResetIcon,
  SearchIcon,
  ShareIcon,
  SideBySideIcon,
  SuccessArrowIcon,
  TrashIcon,
  UserOptionsIcon,
  VisualizationIcon,
  XIcon,
  DecreaseIndentIcon,
  DrawIcon,
  FormatTextBoxIcon,
  IncreaseIndentIcon,
  TextBoxColorIcon,
  TextBoxColorSelectionIcon,
  TextBoxIcon,
  TextColorIcon,
  TextIcon,
  TextStyleIcon,
  UndoChangesIcon,
  RedoChangesIcon
} from "../src";
import { styled, theme } from "../src/utils/Theme";

const icons = [
  <AboutIcon />,
  <AlphabeticalOrderIcon />,
  <AlphabeticalOrderReverseIcon />,
  <ArrowDownIcon />,
  <ArrowIcon />,
  <BackArrowIcon />,
  <BellIcon />,
  <BinderIcon />,
  <BinderLogoIcon />,
  <DoorIcon />,
  <DragDropIcon />,
  <EditBinderCoverIcon />,
  <EditBinderIcon />,
  <EditBinderThemeIcon />,
  <EditUserIcon />,
  <FileIcon />,
  <GradeIcon />,
  <MenuIcon />,
  <MoveIcon />,
  <NewestIcon />,
  <NewIcon />,
  <OldestIcon />,
  <OrderingIcon />,
  <ResetIcon />,
  <SearchIcon />,
  <ShareIcon />,
  <SideBySideIcon />,
  <SuccessArrowIcon />,
  <TrashIcon />,
  <UserOptionsIcon />,
  <VisualizationIcon />,
  <XIcon />,
  <DecreaseIndentIcon />,
  <DrawIcon />,
  <FormatTextBoxIcon />,
  <IncreaseIndentIcon />,
  <TextBoxColorIcon />,
  <TextBoxColorSelectionIcon />,
  <TextBoxIcon />,
  <TextColorIcon />,
  <TextColorIcon color={theme.color.green6} />,
  <TextIcon />,
  <TextStyleIcon />,
  <RedoChangesIcon />,
  <UndoChangesIcon />
];

const Group = styled.div`
  display: flex;
  margin: 16px;
  flex-wrap: wrap;
  justify-content: flex-start;

  & > svg {
    display: block;
    height: 40px;
    width: auto;
  }
`;

const stories = storiesOf("Iconography", module);

stories.add("default", () => <Group>{icons.map(icon => icon)}</Group>, {
  info: { inline: false }
});
