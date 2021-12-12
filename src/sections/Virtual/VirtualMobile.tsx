import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { Section } from '../../components/Section';
import { MobileSwiper } from '../../components/Carousel/MobileSwiper';
import { VIRTUAL_CARDS } from './data';

export function Virtual() {
  return (
    <Section>
      <SectionContainer>
        <Jumbotron>
          <FloatingText>SOULX OPENS UP A BIG DOOR INTO THE FUTURE AND NURTURES THE ECONOMIC DESTINY OF ARTISTS, HOLDERS AND COLLECTORS WITH MULTIPLE OPTIONS.</FloatingText>
          <ImageWrapper>
            <Image src="/images/soulx-jumbotron.svg" alt="SoulX Jumbotron" layout="fill" />
          </ImageWrapper>
        </Jumbotron>
        <TextBlockWrapper>
          <Title>A UNIVERSE OF POSSIBILITIES</Title>
          <Text>
            SOULX it&apos;s a ticket straight towards artistic empowerment. It&apos;s the act of sharing and bonding through art, while also celebrating it for what it is and what it could (sooner rather than later) become. It’s a whole virtual economy system built inside Suspended Soul’s own universe, with multiple and alluring diversification alternatives:
          </Text>
        </TextBlockWrapper>
        <TokenVirtualWrapper />
        <MobileSwiper cards={VIRTUAL_CARDS} />
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

const TokenVirtualWrapper = styled.div`
  background-image: url('/images/token-virtual-background.svg');
  background-position: 100% 100%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 420px;
  margin: 0 ${({ theme }) => theme.spacing(-3, 0)};
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
  padding: ${({ theme }) => theme.spacing(6, 0)};
`;

const Title = styled.h5`
  font-size: 14px;
  font-weight: bold;
  line-height: 24px;
  margin: ${({ theme }) => theme.spacing(1, 0)};
  text-transform: uppercase;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 28px;
  margin: ${({ theme }) => theme.spacing(1, 0)};
`;
