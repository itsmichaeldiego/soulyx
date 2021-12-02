import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { Section } from './Section';
import { SectionHeader } from './SectionHeader';
import { LinkButton } from './LinkButton';

export function GetSoulyx() {
  return (
    <Section>
      <SectionWrapper>
        <ImageWrapper>
          <Image src="/images/get-soulyx.svg" alt="Get Soulyx" layout="fill" />
        </ImageWrapper>
          <ButtonWrapper>
            <GetButton href="https://miso.sushi.com/" text="Get Soulyx" target="_blank" />
          </ButtonWrapper>
          <SectionHeader number="07 - 09" name="Token Launchment Details" description="Community treasure" />
          <SuspendedSoulWrapper>
            <Image src="/images/suspended-soul.svg" alt="Suspended Soul" layout="fill" />
          </SuspendedSoulWrapper>
      </SectionWrapper>
    </Section>
  );
}

const SectionWrapper = styled.div`
  background-image: url('/images/space-man-suspended-soul.png');
  background-position: 0% 0%;
  background-repeat: no-repeat;
  background-size: 100%;
  height: 1816px;
  padding: 158px 80px;
  position: relative;
`;

const ImageWrapper = styled.div`
  max-width: 100%;
  min-height: 200px;
  position: relative;

  @media (max-width: 767px) {
    min-height: 56px;
    max-width: 340px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-bottom: 332px;
  margin-top: 42px;
`;

const GetButton = styled(LinkButton)`
  font-size: 22px;
  margin: 0 auto;
  padding: 20px 26px;
`;

const SuspendedSoulWrapper = styled.div`
  margin-left: 44px;
  margin-top: 120px;
  max-width: 1420px;
  min-height: 300px;
  position: relative;

  @media (max-width: 767px) {
    max-width: 340px;
    min-height: 56px;
  }
`;