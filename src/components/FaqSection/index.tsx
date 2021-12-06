import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { TextLine } from '../TextLine';
import { Section } from '../Section';
import { FaqTable } from './FaqTable/FaqTable';
import { FAQ_DATA } from './data';


export function FaqSection() {
  return (
    <Section>
      <ImageWrapper>
        <Image src="/images/questions.svg" alt="SoulX Banner" layout="fill" />
      </ImageWrapper>
      <TextLine style={{ maxWidth: 240 }}>FREQUENTLY ASKED QUESTIONS</TextLine>
      <FaqTable data={FAQ_DATA} />
    </Section>
  );
}

const ImageWrapper = styled.div`
  min-height: 216px;
  height: 100%;
  max-width: 1420px;
  position: relative;

  @media (max-width: 767px) {
    min-height: 56px;
    max-width: 340px;
  }
`;