import React from 'react';
import styled from 'styled-components';

import { TextLine } from '../../components/TextLine';
import { RoadmapTable } from '../../components/RoadmapTable';
import { RoadmapCards } from '../../components/RoadmapCards';
import { RightLogoSection } from '../../components/RightLogoSection';

import { ROADMAP_TABLE_DATA } from './data';

export function Roadmap() {
  return (
    <div>
      <RightLogoSection src="/images/roadmap-header.svg" alt="Know our roadmap" />
      <div>
        <TextLine>A GROUNDBREAKING PARADIGM SHIFT</TextLine>
        <RoadmapTable data={ROADMAP_TABLE_DATA} />
        <RoadmapCards cards={ROADMAP_TABLE_DATA} />
        <TextLine>If you have any questions, you can check out our FAQ&apos;s <FaqLink href="#faq">here</FaqLink></TextLine>
      </div>
    </div>
  );
}

const FaqLink = styled.a`
  text-decoration: underline;
`;
