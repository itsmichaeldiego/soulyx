import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { TextLine } from '../../components/TextLine';
import { LAUNCH_DETAILS_DATA } from './data';
import { LaunchDetailsTable } from '../../components/LaunchDetailsTable';
import { GetSOULx } from '../../components/GetSOULx';

export function LaunchDetails() {
  return (
    <SectionWrapper>
      <BackgroundWrapper>
        <ImageWrapper>
          <Image src="/images/token-launch-details.svg" alt="Token launch details" layout="fill" />
        </ImageWrapper>
      </BackgroundWrapper>
      <TextLine style={{ maxWidth: 240 }}>OUR COMMUNITY&apos;S INTRINSIC VALUE</TextLine>
      <LaunchDetailsTable data={LAUNCH_DETAILS_DATA} />
      <TextLine>If you have any questions, you can check out our FAQ&apos;s <FaqLink href="#faq">here</FaqLink></TextLine>
      <GetSOULx />
    </SectionWrapper>
  );
}

const SectionWrapper = styled.div`
  margin-right: -24px;
`;

const ImageWrapper = styled.div`
  min-height: 512px;
  height: 100%;
  max-width: 860px;
  position: relative;

  @media (max-width: 767px) {
    min-height: 168px;
    max-width: 240px;
  }
`;

const BackgroundWrapper = styled.div`
  width: 100%;
  background-image: url('/images/logo.png');
  background-repeat: no-repeat;
  background-position: right -12% top 60%;
  background-size: 30%;

  @media (max-width: 767px) {
    background-size: 35%;
    background-position: right -16% top 60%;
  }
`

const FaqLink = styled.a`
  text-decoration: underline;
`;