import React from "react";
import { BodyText } from "../../../typography";
import { Separator } from "../../Separator";
import { TypographyItemWrapper } from "./style";
import { SuccessArrowIcon } from "../../../iconography";

interface TypographyCardItemsProps {
  currentItem?: number;
  setCurrentItem?: (index: number) => void;
  labels: string[];
}

export const TypographyCardItems = ({
  setCurrentItem,
  currentItem,
  labels
}: TypographyCardItemsProps) => {
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
