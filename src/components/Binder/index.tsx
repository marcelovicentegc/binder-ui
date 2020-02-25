import React from "react";
import { CustomContext } from "../CustomContext";
import { MenuItemsProps } from "../Menu";
import { FigureWrapper, Figure, FigCaption, Image } from "./style";
import { Title2, Subtitle } from "../../typography";

export enum BinderSize {
  small = "339px",
  medium = "480px"
}

export interface BoardInterface {
  key: string;
  date?: Date;
  title: string;
  snapshot: string;
  sharedWith?: string[];
  lastUpdatedAt?: string;
}

export interface BinderInterface {
  key: string;
  title: { color: string; text: string };
  img?: string;
  backgroundColor?: string;
  desc?: { color: string; text: string };
  boards?: BoardInterface[];
  date?: Date;
}

export interface BinderProps {
  binder: BinderInterface;
  onClick?: () => void;
  contextMenu?: MenuItemsProps[];
  disabled?: boolean;
  size?: BinderSize;
  setCurrentBinder?: (currentBinder: BinderInterface) => void;
  carousel?: boolean;
}

export const Binder = ({
  binder,
  disabled,
  setCurrentBinder,
  contextMenu,
  carousel,
  onClick,
  size
}: BinderProps) => {
  const [showContextMenu, setShowContextMenu] = React.useState(false);
  const figureRef = React.useRef<HTMLDivElement>();
  const imgRef = React.useRef<HTMLImageElement>();
  const spanRef = React.useRef<HTMLSpanElement>();

  React.useEffect(() => {
    document.addEventListener("contextmenu", event => {
      event.preventDefault();

      if (
        event.target === figureRef.current ||
        event.target === imgRef.current ||
        event.target === spanRef.current
      ) {
        if (setCurrentBinder) {
          setCurrentBinder(binder);
        }

        setShowContextMenu(true);
      } else {
        setShowContextMenu(false);
      }
    });

    document.addEventListener("click", event => {
      event.preventDefault();
      setShowContextMenu(false);
    });
  }, []);

  return (
    <FigureWrapper size={size}>
      {!disabled && contextMenu && (
        <CustomContext showMenu={showContextMenu} menu={contextMenu} />
      )}
      <Figure
        ref={figureRef}
        onClick={onClick}
        disabled={disabled}
        carouselMode={carousel}
        backgroundColor={binder.backgroundColor}
      >
        {binder.img && (
          <Image
            ref={imgRef}
            alt={`${binder.title.text}`}
            src={`${binder.img}`}
            disabled={disabled}
          />
        )}
        <FigCaption disabled={disabled}>
          <Title2 ref={spanRef} color={binder.title.color}>
            {binder.title.text}
          </Title2>
          <Subtitle color={binder.desc?.color}>{binder.desc?.text}</Subtitle>
        </FigCaption>
      </Figure>
    </FigureWrapper>
  );
};
