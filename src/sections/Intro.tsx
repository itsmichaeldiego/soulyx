import React from 'react';
import Image from 'next/image';

import { LogoSection } from '../components/LogoSection'
import { DiscoverSection } from '../components/DiscoverSection'

export function Intro() {
  return (
    <>
      <LogoSection>
        <Image src="/images/soulx.svg" alt="SoulX Banner" layout="fill" objectFit="scale-down" />
      </LogoSection>
      <DiscoverSection text="DISCOVER THE NEW TOKEN BY SUSPENDED SOUL" />
    </>
  )
}
