import React from "react";
import { BodyText } from "../../../typography";
import { Separator } from "../../Separator";
import { TypographyItemWrapper } from "./style";
import { SuccessArrowIcon } from "../../../iconography";

interface TypographyCardItemsProps {
  currentItem?: number;
  setCurrentItem?: (index: number) => void;
}

export const TypographyCardItems = ({
  setCurrentItem,
  currentItem
}: TypographyCardItemsProps) => {
  const labels = [
    "Título",
    "Subtítulo 1",
    "Subtítulo 2",
    "Corpo de texto",
    "Enumeração",
    "Lista",
    "Citação"
  ];

  return (
    <>
      {labels.map((label, i) => (
        <TypographyItemWrapper
          isLastItem={i + 1 === labels.length}
          isSelectedItem={currentItem === i}
          onClick={() => setCurrentItem(i)}
        >
          <BodyText>{label}</BodyText>
          {currentItem === i && <SuccessArrowIcon color={"black"} />}
          {i + 1 !== labels.length && <Separator gray />}
        </TypographyItemWrapper>
      ))}
    </>
  );
};
