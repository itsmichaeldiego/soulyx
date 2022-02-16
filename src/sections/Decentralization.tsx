import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { TOKEN_NAME } from '../dom/token';
import { Default, Mobile, useMobileMediaQuery } from '../lib/mediaQueryHelper'

import { TextSection } from '../components/TextSection'
import { flickerAnimation, simpleMarquee } from '../styles/animations'

export function Decentralization() {
  const isMobile = useMobileMediaQuery();

  return (
    <Wrapper>
      <HeaderImage>
        <Image src="/images/decentralization.svg" alt="THRESHOLD OF DESCENTRALIZATION" layout="fill" objectFit="contain" />
      </HeaderImage>
      <Content>
        <ImageWrapper>
          <Default>
            <Image src="/images/face-asian-low-light.png" alt="Decentralization" width="400" height="631" />
          </Default>
          <Mobile>
            <Image src="/images/face-asian-low-light.png" alt="Decentralization" layout="fill" objectFit="cover" />
          </Mobile>
        </ImageWrapper>
        <TextWrapper>
          <Text>
            TAKING SUSPENDED SOUL
            <br />
            INTO ITS NEXT LEVEL:
            <br />
            A TOTAL EXPERIENCE.
          </Text>
        </TextWrapper>
      </Content>
      <HandSection>
        <TextSection
          align={isMobile ? 'center' : 'flex-start'}
          title="SUSPENDED SOUL DAO: COMMUNITY GOVERNANCE"
          text={`Our roadmap takes us into the democratization of decision making on every step of the platform. ${TOKEN_NAME} token holders will conform and collectively govern Suspended Soul DAO, bringing both creators & collectors the chance of proposing and voting all the platform's actualizations, making sure that it becomes a public asset that directly responds to its solid, inclusive, transparent and diverse community. Here your voice matters.`}
        />
        <TextSection
          align={isMobile ? 'center' : 'flex-end'}
          title={`${TOKEN_NAME} UTILITY`}
          text={`You will be able to swap ${TOKEN_NAME} for NFTs that’ll serve as access tickets for your favorite artistic and social events with the NFT Access Pass feature. In this way, ${TOKEN_NAME} will secure your spot at boutique immersive art events happening all around the world & on the metaverse, as well as to exclusive live auctions before anyone else. ${TOKEN_NAME} tokens can be also used for tipping creatives that you think would enjoy being a part of this decentralized artistic movement.`}
        />
        <TextSection
          align={isMobile ? 'center' : 'flex-start'}
          title="SCARCITY EFFECT: OUR ROADMAP AND VISION"
          text={`A fixed emision of tokens from the start generates a scarcity effect. With time, this takes the investment into a growing curve and, as the platform expands and the interest around ${TOKEN_NAME} rises, its offer remains unaltered. This mechanism will allow a permanent valuation of the token and a continuous development of the Suspended Soul ecosystem.`}
        />
      </HandSection>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: ${({ theme }) => `calc(100vh - ${theme.sizes.header} - ${theme.spacing(12)})`};
`

const HeaderImage = styled.div`
  z-index: 2;
  flex: 1;
  position: relative;
  min-height: 100vh;


  @media ${({ theme }) => theme.media.mobile} {
    min-height: 360px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    min-height: 100vh;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  margin-top: ${({ theme }) => theme.spacing(-16)};
  margin-right: -24px;

  > * {
    flex: 1 1 50%;
  }
  @media ${({ theme }) => theme.media.desktop} {
    margin-top: -15vw;
  }
  @media ${({ theme }) => theme.media.mobile} {
    display: block;
    margin-top: ${({ theme }) => theme.spacing(-4)};
    margin-left: ${({ theme }) => theme.spacing(-3)};
    margin-right: ${({ theme }) => theme.spacing(-3)};
    > * {
      flex: 1;
    }
  }
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(6)};
`;

const ImageWrapper = styled.div`
  min-height: 631px;
  position: relative;
  @media ${({ theme }) => theme.media.mobile} {
    min-height: 520px;
  }
`;

const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
`;

const HandSection = styled.div`
  position: relative;
  z-index: 1;
  padding-bottom: 80px;
  :before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-size: contain;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-image: url('/images/glass-hand.png');

    animation: ${flickerAnimation} 4s linear infinite;

    @media ${({ theme }) => theme.media.desktop} {
      margin-right: ${({ theme }) => theme.spacing(-3)};
    }

    @media ${({ theme }) => theme.media.tablet} {
      background-size: cover;
    }

    @media ${({ theme }) => theme.media.mobile} {
      margin-left: ${({ theme }) => theme.spacing(-3)};
      margin-right: ${({ theme }) => theme.spacing(-3)};
      padding: ${({ theme }) => theme.spacing(0, 3)};
    }
  }

  :after {
    content: " ";
    position: absolute;
    bottom: 62px;
    background-position: center;
    background-image: url('/images/${TOKEN_NAME}-suspended-text.svg');
    width: 100vw;
    height: 29px;
    animation: ${simpleMarquee} 20s linear infinite;
    margin-left: ${({ theme }) => theme.spacing(-9)};
    margin-right: ${({ theme }) => theme.spacing(-3)};
  }
`;
