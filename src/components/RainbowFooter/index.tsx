import React from "react";
import { theme } from "../../utils/Theme";

export const RainbowFooter = () => {
  const renderRainbow = () => {
    return theme.color.rainbowColors.map(color => {
      <div style={{ background: color }} />;
    });
  };

  return <footer>{renderRainbow()}</footer>;
};
