import React from 'react';
import { TextSection } from './TextSection'
import { SectionTitle } from './SectionTitle';
import { SectionHeader } from './SectionHeader';

export function Community() {
  return (
    <>
      <SectionHeader number="02 - 09" name="OUR MISSION" description="Power in the hands of the community" />
      <SectionTitle imageUrl="/images/community.svg" alt="COMMUNITY" />
      <TextSection
        title="INCLUSION AND PLURALITY: OUR FUNDAMENTAL TOOLS"
        text="$SOULYx investment will be destined towards the development of projects that will fuel artistic creation, aiming to directly transform the experience and interaction between creators, art pieces and users/spectators. The Community Treasury will be owned and managed by $SOULYx holders once the Suspended Soul DAO is developed. While in it’s beginning stages, it will be moderated by the Suspended Soul Foundation, keeping as its main goals the development of immersive experiences, and the encouragement of emerging artistic endeavour (patronage), putting into motion subvention projects for emerging artist's with a promising future. "
      />
    </>
  );
}