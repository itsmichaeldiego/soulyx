import React from 'react';
import styled from 'styled-components';

import { RoadmapTable } from '../../components/RoadmapTable';
import { TextLine } from '../../components/TextLine';
import { RoadmapCards } from '../../components/RoadmapCards';

import { ROADMAP_TABLE_DATA } from './data';
import { RightLogoSection } from '../../components/RightLogoSection';
import { Section } from '../../components/Section';
import { GetSOULx } from '../../components/GetSOULx';

export function Roadmap() {
  return (
    <Section>
      <RightLogoSection titleUrl="roadmap-header" />
      <TextLine>A GROUNDBREAKING PARADIGM SHIFT</TextLine>
      <RoadmapTable data={ROADMAP_TABLE_DATA} />
      <RoadmapCards cards={ROADMAP_TABLE_DATA} />
      <TextLine>If you have any questions, you can check out our FAQ&apos;s <FaqLink href="#faq">here</FaqLink></TextLine>
      <GetSOULx />
    </Section>
  );
}

const FaqLink = styled.a`
  text-decoration: underline;
`;