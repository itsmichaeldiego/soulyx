import React from 'react';
import Image from 'next/image';

import { LogoSection } from '../components/LogoSection'
import { DiscoverSection } from '../components/DiscoverSection'

export function Intro() {
  return (
    <>
      <LogoSection>
        <Image src="/images/SOULx.svg" alt="SoulX Banner" layout="fill" objectFit="scale-down" />
      </LogoSection>
      <DiscoverSection text="DISCOVER THE NEW TOKEN BY SUSPENDED SOUL" />
    </>
  )
}
