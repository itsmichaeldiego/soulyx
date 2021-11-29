import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { RoadmapTable } from './RoadmapTable/RoadmapTable';
import { TextLine } from '../TextLine';
import { RoadmapCards } from './RoadmapCards/RoadmapCards';

import { ROADMAP_TABLE_DATA } from './data';

function RoadmapHeader() {
  return (
    <HeaderWrapper>
      <Image src="/images/roadmap-header.svg" alt="SoulX Banner" layout="fill" />
    </HeaderWrapper>
  )
}

export function RoadmapSection() {
  return (
    <>
      <RoadmapHeader />
      <TextLine capitalize>Lorem Ipsum</TextLine>
      <RoadmapTable data={ROADMAP_TABLE_DATA} />
      <RoadmapCards cards={ROADMAP_TABLE_DATA} />
      {/* // TODO: scroll to FAQ */}
      <TextLine>If you have any questions, you can check out our FAQ&apos;s <a href="#faq">here</a></TextLine>
    </>
  );
}

const HeaderWrapper = styled.div`
  height: ${({ theme }) => `calc(100vh - ${theme.sizes.header})`};
  position: relative;

  @media (max-width: 767px) {
    height: 168px;
  }
`;
