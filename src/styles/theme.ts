import { createGlobalStyle } from "styled-components"
import { ISpacingFn, createSpacing } from "spacing-helper";

export const spacingHelper = createSpacing({ factor: 8 });

enum EHierarchies {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
}

export interface ITheme {
  bg: { [key in EHierarchies]?: string }
  cta: { [key in EHierarchies]?: string }
  text: { [key in EHierarchies]?: string }
  font: { [key in EHierarchies]?: string }
  spacing: ISpacingFn
  sizes: { [key: string]: string }
}

// colors are named using name-that-color:
// src: https://chir.ag/projects/name-that-color
export const colors: { [key: string]: string } = {
  black: '#000000',
  white: '#FFFFFF',
  mercury: '#E5E5E5',
  gallery: '#ECECEC',
  vermillion: '#FF3E12',
};

export const fonts: { [key: string]: string } = {
  roboto: 'Roboto, sans-serif',
  parabole: 'Parabole Trial',
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
  text: {
    primary: colors.vermillion,
    secondary: colors.black,
  },
  font: {
    primary: fonts.roboto,
    secondary: fonts.parabole,
  },
  spacing: spacingHelper,
  sizes: {
    nav: spacingHelper(7),
    header: spacingHelper(12),
  },
}

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.text.primary};
    background: ${({ theme }) => theme.bg.primary};
    font-family: ${({ theme }) => theme.font.primary};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`