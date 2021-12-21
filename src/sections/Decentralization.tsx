import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { Default, Mobile, useMobileMediaQuery } from '../lib/mediaQueryHelper'

import { TextSection } from '../components/TextSection'

export function Decentralization() {
  const isMobile = useMobileMediaQuery();
  return (
    <>
      <HeaderImage>
        <Image src="/images/decentralization.svg" alt="THRESHOLD OF DESCENTRALIZATION" layout="fill" objectPosition="top left" />
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
          title="SUSPENDED SOUL’S COMMUNITY GOVERNANCE"
          text="Our roadmap takes us into the democratization of decision making on every step of the platform. The SOULx tokens holders will conform and collectively govern Suspended Soul's DAO, bringing both creators and collectors the chance of proposing and voting the platform's actualizations, making sure that it becomes a public asset that directly responds to their community members. If you have an idea you’d like to see implemented, you can make yourself heard. Your voice matters. It's this community's right to decide their own ways of governance. According to an equity principle, the token holders will make decisions chasing their economic, social and cultural development, building a solid, inclusive, transparent and diverse community driven space."
        />
        <TextSection
          align={isMobile ? 'center' : 'flex-end'}
          title="SOULx UTILITY"
          text={`NFT Access Pass: you will be able to swap SOULx for NFTs that serve as access tickets for your favorite artistic and social events. Token holders can simply buy their SOULx for all the commodities it provides, which includes: access to total experience and immersive art events happening all around the world & on different metaverses, and access to virtual and physical galleries from all around the globe, as well as access to exclusive auctions. SOULx tokens can be also used for tipping creatives in the same way as the famous "tip jars" that are being used by some websites today through apps like Venmo or Paypal. In this way, fans will be able to donate tokens as a means of compensating or rewarding their favorite creators.`}
        />
        <TextSection
          align={isMobile ? 'center' : 'flex-start'}
          title="SCARCITY EFFECT: OUR ROADMAP AND VISION"
          text={`A fixed emision of tokens from the start generates a scarcity effect. With time, this takes the investment into a growing curve and, as the platform expands and the interest around SOULx rises, the coin offer remains unaltered. This mechanism will allow a permanent valuation of the token and a continuous development of the Suspended Soul ecosystem.`}
        />
      </HandSection>
    </>
  );
}

const HeaderImage = styled.div`
  min-height: 50vw;
  position: relative;
  z-index: 2;

  @media (max-width: 767px) {
    min-height: 168px;
  }

  @media (min-width: 1441px) {
    min-height: 660px;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  margin-top: ${({ theme }) => theme.spacing(-11)};
  margin-right: -24px;

  > * {
    flex: 1 1 50%;
  }
  @media (max-width: 767px) {
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
  @media (max-width: 767px) {
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
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('/images/glass-hand.png');
  background-position: 0 400px;
  @media (max-width: 767px) {
    background-size: cover;
    background-position: 0 0;
    margin-left: ${({ theme }) => theme.spacing(-3)};
    margin-right: ${({ theme }) => theme.spacing(-3)};
    padding: ${({ theme }) => theme.spacing(0, 3)};
  }

  @media (min-width: 1441px) {
    background-size: cover;
    margin-left: ${({ theme }) => theme.spacing(-9)};
    margin-right: ${({ theme }) => theme.spacing(-3)};
  }
`;