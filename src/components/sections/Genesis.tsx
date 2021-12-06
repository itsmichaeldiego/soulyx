import React from 'react';
import Image from 'next/image'

import { LogoSection } from '../LogoSection'
import { TextSection } from '../TextSection';
import { TokenizeRoadmap } from '../TokenizeRoadmap';
import { RoadmapChart } from '../RoadmapChart/RoadmapChart';

export function Genesis() {
  return (
    <>
      <LogoSection>
        <Image src="/images/genesis.svg" alt="SoulX Genesis" layout="fill" />
      </LogoSection>
      <TextSection
        title="$SOULYX SUPPLY UNLOCK."
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
      />
      <TokenizeRoadmap />
      <TextSection
        title="LOREM IPSUM DOLOR SIT."
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
      />
      <RoadmapChart />
      <TextSection
        title="LOREM IPSUM DOLOR SIT."
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
      />
    </>
  )
}
