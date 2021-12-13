import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { TextLine } from '../../components/TextLine';
import { Section } from '../../components/Section';
import { FaqTable } from './FaqTable/FaqTable';
import { FAQ_DATA } from './data';


export function FAQ() {
  return (
    <Section>
      <ImageWrapper>
        <Image src="/images/faq.svg" alt="SoulX Banner" layout="fill" />
      </ImageWrapper>
      <TextLine style={{ maxWidth: 240 }}>FREQUENTLY ASKED QUESTIONS</TextLine>
      <FaqTable data={FAQ_DATA} />
    </Section>
  );
}

const ImageWrapper = styled.div`
  height: 100%;
  margin-left: ${({ theme }) => theme.spacing(6)};
  max-width: 600px;
  min-height: 216px;
  position: relative;

  @media (max-width: 767px) {
    margin-left: 0;
    min-height: 56px;
    max-width: 200px;
  }
`;