import React from "react";
import { StyledSearchBar, SearchBarWrapper } from "./style";
import { SearchIcon } from "../../iconography";

interface InputProps {
  inputProps?: Omit<React.HTMLProps<HTMLInputElement>, "ref" | "as">;
}

export const SearchBar = ({ inputProps }: InputProps) => {
  const [colorfulSearchBar, setColorfulSearchBar] = React.useState(false);
  const [isFocusing, setIsFocusing] = React.useState(false);

  return (
    <SearchBarWrapper>
      <StyledSearchBar
        {...inputProps}
        onMouseEnter={() => setColorfulSearchBar(true)}
        onMouseLeave={() => setColorfulSearchBar(isFocusing)}
        onFocus={() => {
          setColorfulSearchBar(true);
          setIsFocusing(true);
        }}
        onBlur={() => {
          setColorfulSearchBar(false);
          setIsFocusing(false);
        }}
      />
      {<SearchIcon color={colorfulSearchBar ? null : "#333333"} />}
    </SearchBarWrapper>
  );
};
