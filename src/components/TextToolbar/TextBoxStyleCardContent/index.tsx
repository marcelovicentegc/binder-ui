import React from "react";
import { Rectangule } from "./style";
import { Separator } from "../../Separator";
import { theme } from "../../../utils/Theme";

export const TextBoxStyleCardContent: React.FC = () => {
  return (
    <>
      <Rectangule />
      <Separator gray />
      <Separator invisible />
      <Rectangule strokeHex={theme.color.red3} />
      <Separator invisible />
      <Rectangule dashed strokeHex={theme.color.blue2} />
    </>
  );
};
