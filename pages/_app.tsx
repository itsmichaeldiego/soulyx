import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components";

import { GlobalStyles, theme } from '../styles/theme'
import { FontFace } from '../styles/fontface'

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
