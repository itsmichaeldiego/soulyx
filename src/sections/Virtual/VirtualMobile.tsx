import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { Section } from '../../components/Section';

export function Virtual() {
  return (
    <Section>
      <SectionContainer>
        <Jumbotron>
          <FloatingText>$SOULx OPENS UP A BIG DOOR INTO THE FUTURE AND NURTURES THE ECONOMIC DESTINY OF ARTISTS, HOLDERS AND COLLECTORS WITH MULTIPLE OPTIONS.</FloatingText>
          <ImageWrapper>
            <Image src="/images/soulx-jumbotron.svg" alt="SoulX Jumbotron" layout="fill" />
          </ImageWrapper>
        </Jumbotron>
        <TextBlockWrapper>
          <Title>A UNIVERSE OF POSSIBILITIES</Title>
          <Text>
            $SOULx it&apos;s a ticket straight towards artistic empowerment. It&apos;s the act of sharing and bonding through art, while also celebrating it for what it is and what it could (sooner rather than later) become. It’s a whole virtual economy system built inside Suspended Soul’s own universe, with multiple and alluring diversification alternatives:
          </Text>
        </TextBlockWrapper>
        {/* // TODO: Figure this out */}
        {/* <TokenVirtualWrapper>
          <LogoImageWrapper>
            <Image src="/images/token-background-text.svg" alt="Token background text" layout="fill" />
          </LogoImageWrapper>
          <LogoImageWrapper>
            <Image src="/images/virtual-background-text.svg" alt="Virtual background text" layout="fill" />
          </LogoImageWrapper>
        </TokenVirtualWrapper> */}
      </SectionContainer>
    </Section>
  );
}

const SectionContainer = styled.div`
  position: relative;
`;

const Jumbotron = styled.div`
  background-image: url('/images/soulx-background-person.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 488px;
  margin: 0 ${({ theme }) => theme.spacing(-3, 0)};
  padding: ${({ theme }) => theme.spacing(4, 0)};
`;

const FloatingText = styled.div`
  font-size: 12px;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  margin-left: ${({ theme }) => theme.spacing(3)};
  max-width: 210px;
`;

const ImageWrapper = styled.div`
  margin-left: ${({ theme }) => theme.spacing(1)};
  max-width: 360px;
  min-height: 400px;
  position: relative;
`;

const TextBlockWrapper = styled.article`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(8, 0)};
`;

const Title = styled.h5`
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;
  margin: ${({ theme }) => theme.spacing(1, 0)};
`;

const Text = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
  margin: ${({ theme }) => theme.spacing(1, 0)};
`;

const TokenVirtualWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 140px;
  margin-top: 60px;
  position: relative;
`;

const LogoImageWrapper = styled.div`
  // TODO: Figure this out
  min-height: 235px;
  position: relative;

  &:first-of-type {
    margin-bottom: -140px;
  }
`;
