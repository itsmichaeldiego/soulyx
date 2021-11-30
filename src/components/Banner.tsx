import React from 'react';
import Image from 'next/image';

import { LogoSection } from './LogoSection'

export function Banner() {
  return (
    <LogoSection>
      <Image src="/images/soulyx.svg" alt="SoulX Banner" layout="fill" />
    </LogoSection>
  )
}
