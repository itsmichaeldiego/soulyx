import React from 'react';

import { IntroLogoSection } from '../components/IntroLogoSection'
import { DiscoverSection } from '../components/DiscoverSection'

export function Intro() {
  return (
    <>
      <IntroLogoSection src="/images/soulx.svg" alt="SoulX Banner" layout="fill" />
      <DiscoverSection text="DISCOVER THE NEW TOKEN BY SUSPENDED SOUL" />
    </>
  )
}
