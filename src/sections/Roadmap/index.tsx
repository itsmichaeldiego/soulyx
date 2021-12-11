import React from 'react';

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
      <TextLine>A groundbreaking  paradigm shift</TextLine>
      <RoadmapTable data={ROADMAP_TABLE_DATA} />
      <RoadmapCards cards={ROADMAP_TABLE_DATA} />
      {/* // TODO: scroll to FAQ */}
      <TextLine>If you have any questions, you can check out our FAQ&apos;s <a href="#faq">here</a></TextLine>
      <GetSOULx />
    </Section>
  );
}