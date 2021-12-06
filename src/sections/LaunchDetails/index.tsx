import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { TextLine } from '../../components/TextLine';
import { Section } from '../../components/Section';
import { LAUNCH_DETAILS_DATA } from './data';
import { LaunchDetailsTable } from '../../components/LaunchDetailsTable';

export function LaunchDetails() {
  return (
    <Section>
      <BackgroundWrapper>
        <ImageWrapper>
          <Image src="/images/token-launch-details.svg" alt="Token launch details" layout="fill" />
        </ImageWrapper>
      </BackgroundWrapper>
      <TextLine style={{ maxWidth: 240 }}>OUR COMMUNITY&apos;S INTRINSIC VALUE</TextLine>
      <LaunchDetailsTable data={LAUNCH_DETAILS_DATA} />
      <TextLine>If you have any questions, you can check out our FAQ&apos;s <a href="#faq">here</a></TextLine>
    </Section>
  );
}

const ImageWrapper = styled.div`
  min-height: 512px;
  height: 100%;
  max-width: 860px;
  position: relative;

  @media (max-width: 767px) {
    min-height: 168px;
    max-width: 260px;
  }
`;

const BackgroundWrapper = styled.div`
  width: 100%;
  background-image: url('/images/logo.png');
  background-repeat: no-repeat;
  background-position: right -38px top 0px;
  background-size: 35%;
`