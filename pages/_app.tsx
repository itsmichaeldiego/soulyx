import React from 'react';
import Provider from '../src/store'
// suppress useLayoutEffect warnings when running outside a browser
if (!process.browser) React.useLayoutEffect = React.useEffect;

import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components";

import { GlobalStyles, theme } from '../src/styles/theme'
import { FontFace } from '../src/styles/fontface'
import { Preloader } from '../src/components/Preloader'
import 'locomotive-scroll/dist/locomotive-scroll.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <FontFace />
        <GlobalStyles />
        <Preloader />
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp
