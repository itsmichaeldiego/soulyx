import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

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
        <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Layout>
        <HomePage />
      </Layout>
    </>
  )
}

export default Home
