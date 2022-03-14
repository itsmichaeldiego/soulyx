import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { TOKEN_NAME } from '../../dom/token';

import { Section } from '../../components/Section';
import { MobileSwiper } from '../../components/Carousel/MobileSwiper';
import { MarqueeBackgroundLeft, MarqueeBackgroundRight } from '../../components/MarqueeBackground';

import { VIRTUAL_CARDS } from './data';

export function Virtual() {
  return (
    <Section>
      <SectionContainer>
        <Jumbotron>
          <FloatingText>
            {`${TOKEN_NAME} OPENS UP A BIG DOOR INTO THE FUTURE AND NURTURES THE ECONOMIC DESTINY OF ARTISTS, HOLDERS AND COLLECTORS WITH MULTIPLE OPTIONS.`}
          </FloatingText>
          <ImageWrapper>
            <Image src="/images/soulx-jumbotron.svg" alt={`${TOKEN_NAME} Jumbotron`} layout="fill" />
          </ImageWrapper>
        </Jumbotron>
        <TextBlockWrapper>
          <Title>A UNIVERSE OF POSSIBILITIES</Title>
          <Text>
            {`${TOKEN_NAME} is a ticket straight towards artistic empowerment. It’s a whole virtual economy system built inside Suspended Soul’s own universe, with multiple and alluring diversification alternatives for both artists and collectors, creatives and spectators.`}
          </Text>
        </TextBlockWrapper>
        <MarqueeWrapper>
          <MarqueeBackgroundLeft url="/images/token-background-text.svg" />
          <MarqueeBackgroundRight url="/images/virtual-background-text.svg" />
        </MarqueeWrapper>
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
  height: ${({ theme }) => theme.spacing(68)};
  margin: 0 ${({ theme }) => theme.spacing(-3, 0)};
  padding: ${({ theme }) => theme.spacing(4, 0)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MarqueeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  margin: 0 -24px;
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
  margin-left: ${({ theme }) => theme.spacing(3)};
  position: relative;
  width: 90%;
  padding-top: 22%;
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
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 28px;
  margin: ${({ theme }) => theme.spacing(1, 0)};
`;
