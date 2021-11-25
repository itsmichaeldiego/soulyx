import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Suspended Soul</title>
        <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Header />

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p>
          Get started by editing{' '}
          <code>pages/index.tsx</code>
        </p>
      </main>

      <footer>
        <Image src="/logo.svg" alt="SoulX Logo" width={48} height={48} />
      </footer>
    </>
  )
}

export default Home
