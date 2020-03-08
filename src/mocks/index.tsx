import React from "react";
import { MenuItemsProps } from "../components/Menu";
import {
  NewIcon,
  SearchIcon,
  FileIcon,
  TrashIcon,
  ShareIcon,
  VisualizationIcon,
  OrderingIcon,
  EditBinderIcon
} from "../iconography";
import { BinderInterface } from "../components/Binder";
import ancientHistoryBg from "../assets/ancientHistoryBg.png";
import naturalSciencesBg from "../assets/naturalSciencesBg.png";
import geometryBg from "../assets/geometryBg.png";
import { theme } from "../utils/Theme";

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

export const contextMenuItems: MenuItemsProps[] = [
  {
    icon: <FileIcon />,
    mode: "section",
    title: "Archive",
    onClick
  },
  {
    icon: <EditBinderIcon />,
    title: "Edit binder",
    onClick
  },
  {
    icon: <TrashIcon />,
    title: "Delete binder",
    onClick
  }
];

export const naturalSciencesBinder: BinderInterface = {
  key: "1",
  img: naturalSciencesBg,
  title: { color: "#FFFFFF", text: "Sciences" },
  desc: { color: "#FFFFFF", text: "Reino Plantae" },
  date: new Date(2020, 1, 12)
};

export const ancientHistoryBinder: BinderInterface = {
  key: "2",
  img: ancientHistoryBg,
  title: { color: "#31299", text: "History" },
  desc: { color: "#c94129", text: "Ancient history" },
  date: new Date(2020, 1, 11)
};

export const planeGeometryBinder: BinderInterface = {
  key: "3",
  img: geometryBg,
  backgroundColor: theme.color.green6,
  title: { color: theme.color.yellow5, text: "Geometry" },
  desc: { color: "#fff", text: "Plane geometry" },
  courseInformation: {
    grade: "10th grade",
    teacher: "Mr. Skogen"
  },
  date: new Date(2019, 1, 11)
};

export const physicalGeographyBinder: BinderInterface = {
  key: "4",
  img: "",
  title: { color: "#fff", text: "Phsyical geography" },
  date: new Date(2020, 1, 8)
};

export const philosophyBinder: BinderInterface = {
  key: "5",
  img: "",
  title: { color: theme.color.yellow2, text: "Philosophy" },
  desc: { color: theme.color.white3, text: "Hermeneutics" },
  backgroundColor: theme.color.purple1,
  date: new Date(2020, 1, 3),
  courseInformation: {
    grade: "12th grade",
    teacher: "Mrs. Bauman"
  },
  boards: [
    {
      key: "1",
      fk: "5",
      date: new Date(2020, 1, 2),
      title: "Hermeneutics of oneself",
      snapshot: ""
    },
    {
      key: "2",
      fk: "5",
      date: new Date(2020, 1, 1),
      title: "Interpretation theory",
      snapshot: "",
      sharedWith: ["João", "Maria", "Isidoro"],
      lastUpdatedAt: "última atualização ontem, às 21:38, por você"
    },
    {
      key: "3",
      fk: "5",
      date: new Date(2020, 1, 13),
      title: "Life and work of Heidegger",
      snapshot: "",
      sharedWith: ["Luíza"],
      lastUpdatedAt: "última atualização ontem, às 11:05, por Luíza"
    }
  ]
};

export const binders: BinderInterface[] = [
  naturalSciencesBinder,
  ancientHistoryBinder,
  planeGeometryBinder,
  physicalGeographyBinder,
  philosophyBinder
];

export const bodyTextOptions = [
  "Title",
  "Subtitle 1",
  "Subtitle 2",
  "Body text",
  "Enumeration",
  "List",
  "Quote"
];

export const textStyleOptions = [
  {
    scope: "trads",
    fontFamily: "Muli"
  },
  {
    scope: "trads",
    fontFamily: "Source Sans Pro"
  },
  {
    scope: "trads",
    fontFamily: "Work Sans"
  },
  {
    scope: "classics",
    fontFamily: "Domine"
  },
  {
    scope: "handWritten",
    fontFamily: "Gochi Hand"
  },
  {
    scope: "handWritten",
    fontFamily: "Nanun Pen"
  }
];
