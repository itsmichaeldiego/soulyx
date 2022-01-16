import React from 'react'
import type { NextPage } from 'next'

import { Layout } from '../src/components/Layout'
import { IntroLogoSection } from '../src/components/NewIntroLogoSection'

const Home: NextPage = () => {
  return (
    <Layout>
      <IntroLogoSection />
    </Layout>
  )
}

export default Home
