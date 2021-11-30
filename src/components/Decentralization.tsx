import React from 'react';
import Image from 'next/image'

import { Section } from './Section'
import { SectionHeader } from './SectionHeader';

export function Decentralization() {
  return (
    // TODO: Remove this after finalizing with 1st section sizes
    <div style={{ marginTop: 260 }}>
      <SectionHeader number="01 - 09" name="Soulyx New Token" description="threshold of descentralization" />
      <Section>
        <Image src="/images/decentralization.svg" alt="Decentralization" layout="fill" />
      </Section>
    </div>
  );
}
