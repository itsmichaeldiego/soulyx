import React from 'react';
import Image from 'next/image';

import { LogoSection } from '../components/LogoSection'
import { DiscoverSection } from '../components/DiscoverSection'

export function Intro() {
  return (
    <>
      <LogoSection>
        <Image src="/images/soulyx.svg" alt="SoulX Banner" layout="fill" />
      </LogoSection>
      <DiscoverSection text="DISCOVER THE NEW TOKEN BY SUSPENDED SOUL" />
    </>
  )
}
