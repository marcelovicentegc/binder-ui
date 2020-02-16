import React, { HTMLProps } from "react";
import { StyledCard } from "./style";

interface CardProps {
  children: React.ReactNode | React.ReactNode[];
  cardProps?: Omit<HTMLProps<HTMLDivElement>, "ref" | "as">;
}

export const Card: React.FC<CardProps> = ({ children, cardProps }) => {
  return (
    <StyledCard {...cardProps}>
      {Array.isArray(children) ? children.map(child => child) : children}
    </StyledCard>
  );
};
