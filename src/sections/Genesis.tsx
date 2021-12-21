import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { TextSection } from '../components/TextSection';
import { TokenizeRoadmap } from '../components/TokenizeRoadmap';
import { RoadmapChart } from '../components/RoadmapChart';
import { Diagram } from '../components/Diagram';
import { Section } from '../components/Section';

export function Genesis() {
  return (
    <Section>
      <LogoWrapper>
        <Image src="/images/genesis.svg" alt="SoulX Genesis" layout="fill" objectFit="contain" />
      </LogoWrapper>
      <TextSection
        title="SOULx SUPPLY"
        text="Our total token supply consists of 235.000.000 SOULx, those of which will be divided into different percentages and destined into different holders according to our mission, as stated below."
      />
      <TokenizeRoadmap />
      <TextSection
        title="SUSPENDED SOUL'S ECOSYSTEM"
        text="The main monetary entrance of the project are the honoraries and commision fees of the sales completed through all its verticals. The net earning of each vertical will be destined to a stabilization fund with the goal of recovering SOULx from the market, so that it can easily come back to the community treasury and, from there, keep reinvesting it into artistic endeavours. This mechanism will allow a permanent valuation of the token and a continuous development of the Suspended Soul ecosystem.  "
      />
      <RoadmapChart />
      <TextSection
        title="A UNIVERSE OF POSSIBILITIES"
        text="SOULx opens a door for the future and provides options for the economic destiny of its investors. A new virtual economy created through Suspended Soul’s ecosystem, with multiple diversification alternatives."
      />
      <Diagram />
    </Section>
  );
}

const LogoWrapper = styled.div`
  min-height: 100vw;
  position: relative;
  background-image: url('/images/logo.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 40vw;

  @media (max-width: 767px) {
    min-height: 296px;
    background-size: 45%;
  }
`;
