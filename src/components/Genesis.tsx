import React from 'react';
import Image from 'next/image'

import { LogoSection } from './LogoSection'
import { SectionHeader } from './SectionHeader'

export function Genesis() {
  return (
    <>
      <SectionHeader number="04 - 09" name="SOULYX GENESIS DISTRIBUTION" description="SUPPLY & DAO" />
      <LogoSection>
        <Image src="/images/genesis.svg" alt="SoulX Genesis" layout="fill" />
      </LogoSection>
    </>
  )
}
