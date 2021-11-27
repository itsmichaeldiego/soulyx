import React from 'react';
import Image from 'next/image'

import { LogoSection } from './LogoSection'

export function Genesis() {
  return (
    <LogoSection>
      <Image src="/images/genesis.svg" alt="SoulX Genesis" layout="fill" />
    </LogoSection>
  )
}
