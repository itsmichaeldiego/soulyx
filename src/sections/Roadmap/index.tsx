import React from 'react';
import styled from 'styled-components';

import { TextLine } from '../../components/TextLine';
import { RoadmapTable } from '../../components/RoadmapTable';
import { RoadmapCards } from '../../components/RoadmapCards';
import { RightLogoSection } from '../../components/RightLogoSection';

import { ROADMAP_TABLE_DATA } from './data';

export function Roadmap() {
  return (
    <SectionWrapper>
      <RightLogoSection src="/images/roadmap-header.svg" alt="Know our roadmap" />
      <SectionContent>
        <TextLine>A GROUNDBREAKING PARADIGM SHIFT</TextLine>
        <RoadmapTable data={ROADMAP_TABLE_DATA} />
        <RoadmapCards cards={ROADMAP_TABLE_DATA} />
        <TextLine>If you have any questions, you can check out our FAQ&apos;s <FaqLink href="#faq">here</FaqLink></TextLine>
      </SectionContent>
    </SectionWrapper>
  );
}

const SectionWrapper = styled.div`
  // for logo to overlap right padding on mobile
  @media ${({ theme }) => theme.media.mobile} {
    margin-right: -24px;
  }
`;

const SectionContent = styled.div`
  @media ${({ theme }) => theme.media.mobile} {
    margin-right: 24px;
  }
`;

const FaqLink = styled.a`
  text-decoration: underline;
`;
