import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { GetToken } from '../../components/GetToken';
import { TextLine } from '../../components/TextLine';
import { RightLogoSection } from '../../components/RightLogoSection';
import { LaunchDetailsTable } from '../../components/LaunchDetailsTable';

import { LAUNCH_DETAILS_DATA } from './data';

export function LaunchDetails() {
  return (
    <SectionWrapper>
      <RightLogoSection src="/images/soulx-launch-details.svg" alt="Token launch details" />
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

const FaqLink = styled.a`
  text-decoration: underline;
`;