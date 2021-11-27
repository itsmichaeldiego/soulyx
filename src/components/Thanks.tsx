import React from 'react';
import Image from 'next/image'

import { LogoSection } from './LogoSection'

export function Thanks() {
  return (
    <LogoSection>
      <Image src="/images/thanks.svg" alt="SoulX Thannks" layout="fill" />
    </LogoSection>
  )
}
