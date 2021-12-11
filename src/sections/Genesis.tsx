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
        title="SOULx SUPPLY"
        text="Our total token supply consists of 235.000.000 SOULx, those of which will be divided into different percentages and destined into different holders according to our mission, as stated below."
      />
      <TokenizeRoadmap />
      <TextSection
        title="SUSPENDED SOUL’S ECOSYSTEM"
        text="The main monetary entrance of the project are the honoraries and commision fees of the sales completed through all its verticals. The net earning of each vertical will be destined to a stabilization fund with the goal of recovering SOULx from the market, so that it can easily come back to the community treasury and, from there, keep reinvesting it into artistic endeavours. This mechanism will allow a permanent valuation of the token and a continuous development of the Suspended Soul ecosystem.  "
      />
      <RoadmapChart />
      <TextSection
        title="A UNIVERSE OF POSSIBILITIES"
        text="SOULx opens a door for the future and provides options for the economic destiny of its investors. A new virtual economy created through Suspended Soul’s ecosystem, with multiple diversification alternatives."
      />
      <Diagram />
    </>
  )
}
