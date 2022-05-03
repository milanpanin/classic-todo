import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  themeButton: '#1e1e1e',
  text: "#333",
  section: '#cdcdcd',
  itemBackground: '#b9b9b9',
};

export const darkTheme = {
  body: "#1e1e1e",
  themeButton: '#fff',
  text: "#fff",
  section: '#484848',
  itemBackground: '#707070',
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
`;
