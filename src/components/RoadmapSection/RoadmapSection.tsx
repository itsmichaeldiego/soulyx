import React from 'react';

import { RoadmapTable } from './RoadmapTable/RoadmapTable';
import { TextLine } from '../TextLine';
import { RoadmapCards } from './RoadmapCards/RoadmapCards';

import { ROADMAP_TABLE_DATA } from './data';
import { RightLogoSection } from '../RightLogoSection';
import { Section } from '../Section';
import { SectionHeader } from '../SectionHeader';

export function RoadmapSection() {
  return (
    <Section>
      <SectionHeader number="05 - 09" name="Token Launchment Details" description="Community Treasure" />
      <RightLogoSection titleUrl="roadmap-header" />
      <TextLine capitalize>Lorem Ipsum</TextLine>
      <TextLine style={{ maxWidth: 240 }} capitalize>Frequently asked questions</TextLine>
      <RoadmapTable data={ROADMAP_TABLE_DATA} />
      <RoadmapCards cards={ROADMAP_TABLE_DATA} />
      {/* // TODO: scroll to FAQ */}
      <TextLine>If you have any questions, you can check out our FAQ&apos;s <a href="#faq">here</a></TextLine>
    </Section>
  );
}