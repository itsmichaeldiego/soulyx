import React from 'react';

import { LogoSection } from '../components/LogoSection'
import { DiscoverSection } from '../components/DiscoverSection'

export function Intro() {
  return (
    <>
      <LogoSection src="/images/soulx.svg" alt="SoulX Banner" layout="fill" />
      <DiscoverSection text="DISCOVER THE NEW TOKEN BY SUSPENDED SOUL" />
    </>
  )
}
