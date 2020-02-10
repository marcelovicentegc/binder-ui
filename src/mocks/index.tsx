import React from "react";
import { MenuItemsProps } from "../components/Menu";
import {
  NewIcon,
  SearchIcon,
  FileIcon,
  TrashIcon,
  ShareIcon,
  VisualizationIcon,
  OrderingIcon
} from "../iconography";

export const onClick = () => alert("🚀🚀🚀🚀🚀🚀🚀");

export const menuItems: MenuItemsProps[] = [
  {
    icon: <NewIcon />,
    onClick,
    mode: "section",
    title: "New binder"
  },
  {
    icon: <SearchIcon />,
    onClick,
    title: "Search"
  },
  {
    icon: <FileIcon />,
    onClick,
    title: "Archive"
  },
  {
    icon: <TrashIcon />,
    onClick,
    title: "Trash"
  },
  {
    icon: <ShareIcon />,
    onClick,
    mode: "section",
    title: "Share"
  },
  {
    icon: <VisualizationIcon />,
    onClick,
    mode: "withArrow",
    title: "Binder visualization"
  },
  {
    icon: <OrderingIcon />,
    onClick,
    mode: "withArrow",
    title: "Binder organization"
  }
];
