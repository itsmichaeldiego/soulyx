import React from 'react';
import Image from 'next/image'

import { Section } from './Section'

export function Decentralization() {
  return (
    <Section>
      <Image src="/images/decentralization.svg" alt="Decentralization" layout="fill" />
    </Section>
  )
}
