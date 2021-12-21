import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { RoadmapTable } from '../../components/RoadmapTable';
import { TextLine } from '../../components/TextLine';
import { RoadmapCards } from '../../components/RoadmapCards';

import { ROADMAP_TABLE_DATA } from './data';

export function Roadmap() {
  return (
    <SectionWrapper>
      <BackgroundWrapper>
        <HeaderWrapper>
          <Image src="/images/roadmap-header.svg" alt="Know our roadmap" layout="fill" objectPosition="top left" />
        </HeaderWrapper>
      </BackgroundWrapper>
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
  @media (max-width: 767px) {
    margin-right: -24px;
  }
`;

const SectionContent = styled.div`
  @media (max-width: 767px) {
    margin-right: 24px;
  }
`;

const HeaderWrapper = styled.div`
  min-height: 624px;
  position: relative;

  @media (max-width: 767px) {
    min-height: 168px;
    max-width: 240px;
  }

  @media (min-width: 1440px) {
    max-width: 1268px;
  }
`;

const BackgroundWrapper = styled.div`
  width: 100%;

  @media (max-width: 767px) {
    background-image: url('/images/logo.png');
    background-repeat: no-repeat;
    background-size: 35%;
    background-position: right -16% top 40%;
  }
`;

const FaqLink = styled.a`
  text-decoration: underline;
`;
