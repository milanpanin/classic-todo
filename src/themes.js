import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  themeButton: '#1e1e1e',
  text: "#333",
  section: '#cdcdcd',
};

export const darkTheme = {
  body: "#1e1e1e",
  themeButton: '#fff',
  text: "#fff",
  section: '#484848',
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
`;
