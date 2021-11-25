import { createGlobalStyle } from "styled-components"

enum EHierarchies {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
}

export interface ITheme {
  bg: { [key in EHierarchies]?: string },
  cta: { [key in EHierarchies]?: string }
  font: { [key in EHierarchies]?: string }
}

// colors are named using name-that-color:
// src: https://chir.ag/projects/name-that-color
export const colors: { [key: string]: string } = {
  black: '#000000',
  white: '#FFFFFF',
  mercury: '#E5E5E5',
  vermillion: "#FF3E12",
  gallery: '#ECECEC',
};

export const theme: ITheme = {
  bg: {
    primary: colors.mercury,
    secondary: colors.vermillion,
    tertiary: colors.gallery,
  },
  cta: {
    primary: colors.vermillion,
  },
  font: {
    primary: colors.vermillion,
    secondary: colors.black,
  },
}

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.font.primary};
    background: ${({ theme }) => theme.bg.primary};
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, 
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`