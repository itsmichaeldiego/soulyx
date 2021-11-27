import React from 'react';
// suppress useLayoutEffect warnings when running outside a browser
if (!process.browser) React.useLayoutEffect = React.useEffect;

import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components";

import { GlobalStyles, theme } from '../src/styles/theme'
import { FontFace } from '../src/styles/fontface'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <FontFace />
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
