import React from 'react';

import { SectionHeader } from './SectionHeader';
import { SectionTitle } from './SectionTitle';

export function Decentralization() {
  return (
    <>
      <SectionHeader number="01 - 09" name="Soulyx New Token" description="threshold of descentralization" />
      <SectionTitle imageUrl="/images/decentralization.svg" alt="Decentralization" />
    </>
  );
}