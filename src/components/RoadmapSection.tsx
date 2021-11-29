import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { RoadmapTable } from './RoadmapTable/RoadmapTable';
import { TextLine } from './TextLine';

function RoadmapHeader() {
  return (
    <Wrapper>
      <Image src="/images/roadmap-header.svg" alt="SoulX Banner" layout="fill" />
    </Wrapper>
  )
}

export function RoadmapSection() {
  return (
    <>
      <RoadmapHeader />
      <TextLine capitalize>Community Treasure</TextLine>

      <RoadmapTable />
      {/* // TODO: scroll to FAQ */}
      <TextLine>If you have any questions, you can check out our FAQ&apos;s <a href="#faq">here</a></TextLine>
    </>
  );
}

const Wrapper = styled.div`
  position: relative;
  height: ${({ theme }) => `calc(100vh - ${theme.sizes.header})`};
`;
