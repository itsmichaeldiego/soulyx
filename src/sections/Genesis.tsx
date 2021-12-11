import React from 'react';
import Image from 'next/image'

import { LogoSection } from '../components/LogoSection'
import { TextSection } from '../components/TextSection';
import { TokenizeRoadmap } from '../components/TokenizeRoadmap';
import { RoadmapChart } from '../components/RoadmapChart';
import { Diagram } from '../components/Diagram';

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
      <Diagram />
    </>
  )
}
