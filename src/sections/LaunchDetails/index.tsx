import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { GetToken } from '../../components/GetToken';
import { TextLine } from '../../components/TextLine';
import { LaunchDetailsTable } from '../../components/LaunchDetailsTable';

import { LAUNCH_DETAILS_DATA } from './data';

export function LaunchDetails() {
  return (
    <SectionWrapper>
      <BackgroundWrapper>
        <ImageWrapper>
          <Image src="/images/soulx-launch-details.svg" alt="Token launch details" layout="fill" objectPosition="top left"/>
        </ImageWrapper>
      </BackgroundWrapper>
      <ContentWrapper>
        <TextLine style={{ maxWidth: 240 }}>OUR COMMUNITY&apos;S INTRINSIC VALUE</TextLine>
        <LaunchDetailsTable data={LAUNCH_DETAILS_DATA} />
        <TextLine>If you have any questions, you can check out our FAQ&apos;s <FaqLink href="#faq">here</FaqLink></TextLine>
      </ContentWrapper>
      <GetToken />
    </SectionWrapper>
  );
}

const SectionWrapper = styled.div`
  margin-right: ${({ theme }) => theme.spacing(-3)};
`;

const ContentWrapper = styled.div`
  padding-right: ${({ theme }) => theme.spacing(3)};
`;

const ImageWrapper = styled.div`
  min-height: 80vh;
  height: 100%;
  max-width: 60vw;
  position: relative;

  @media ${({ theme }) => theme.media.mobile} {
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

  @media ${({ theme }) => theme.media.mobile} {
    background-size: 35%;
    background-position: right -16% top 60%;
  }
`;

const FaqLink = styled.a`
  text-decoration: underline;
`;