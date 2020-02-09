import React from "react";
import { render as testingLibraryRender} from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme";


export const render = (
	ui: React.ReactElement
) => {
	return {
		...testingLibraryRender(
			<ThemeProvider theme={theme}>
					{ui}
			</ThemeProvider>,
		),
	};
};
