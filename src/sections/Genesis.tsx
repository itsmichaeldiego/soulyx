import React from 'react';
import styled from 'styled-components';

import { Diagram } from '../components/Diagram';
import { Section } from '../components/Section';
import { LogoSection } from '../components/LogoSection';
import { TextSection } from '../components/TextSection';
import { RoadmapChart } from '../components/RoadmapChart';
import { TokenizeRoadmap } from '../components/TokenizeRoadmap';
import { TOKEN_NAME } from '../dom/token';

export function Genesis() {
  return (
    <StyledSection>
      <LogoSection src="/images/genesis.svg" alt={`${TOKEN_NAME} Genesis`} layout="fill"  />
      <TextSection
        title={`${TOKEN_NAME} SUPPLY`}
        text={`Our total token supply consists of 235.000.000 ${TOKEN_NAME}, those of which will be divided into different percentages and destined into different holders according to our mission, as stated below.`}
      />
      <TokenizeRoadmap />
      <TextSection
        title="SUSPENDED SOUL'S ECOSYSTEM"
        text={`The main monetary entrance of the project are the honoraries and commision fees of the art sales. The net earning of each vertical will be destined to a stabilization fund with the goal of recovering ${TOKEN_NAME} from the market so that it can easily come back to the community treasury and, from there, keep reinvesting it into artistic endeavors and artists’ patronage, allowing a permanent valuation of the token and a continuous development of the Suspended Soul ecosystem.`}
      />
      <RoadmapChart />
      <TextSection
        title="A UNIVERSE OF POSSIBILITIES"
        text={`${TOKEN_NAME} opens a door for the future and provides options for the artistic & economic destiny of its investors. A new virtual economy created through Suspended Soul’s ecosystem, with multiple diversification alternatives.`}
      />
      <Diagram />
    </StyledSection>
  );
}

const StyledSection = styled.section`
  position: relative;
  min-height: ${({ theme }) => `calc(100vh - ${theme.sizes.header})`};
  height: 100%;
`
