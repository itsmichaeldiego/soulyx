import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import { TOKEN_NAME } from '../src/dom/token'

import { Layout } from '../src/components/Layout'
import { HomePage } from '../src/components/HomePage'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Suspended Soul</title>
        <link
          rel="preload"
          href="/fonts/Parabole/ParaboleTrial-Regular.otf"
          as="font"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="description" content={`${TOKEN_NAME} it's a ticket straight towards artistic empowerment. It's the act of sharing and bonding through art, while also celebrating it for what it is and what it could (sooner rather than later) become. It’s a whole virtual economy system built inside Suspended Soul’s own universe, with multiple and alluring diversification alternatives`} />
        <meta name="robots" content="all" />
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="application-name" content="Suspended Soul" />
        <meta name="apple-mobile-web-app-title" content="Suspended Soul"/>
        <meta name="theme-color" content="#ececec"/>
        <meta name="msapplication-navbutton-color" content="#ececec"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `,
          }} />
      </Head>
      <Layout>
        <HomePage />
      </Layout>
    </>
  )
}

export default Home
