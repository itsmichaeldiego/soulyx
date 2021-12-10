import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { Default, Mobile, useMobileMediaQuery } from '../lib/mediaQueryHelper'

import { TextSection } from '../components/TextSection'
import { SectionTitle } from '../components/SectionTitle';

export function Decentralization() {
  const isMobile = useMobileMediaQuery();
  return (
    <>
      <SectionTitle imageUrl="/images/decentralization.svg" alt="THRESHOLD OF DESCENTRALIZATION" />
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
          text="We bring both creators and collectors the chance of proposing and voting the platform's actualizations, making sure that it becomes a public asset that directly responds to their community members. If you have an idea you’d like to see implemented, you can make yourself heard. Your voice matters. It's this community's right to decide their own ways of governance. According to an equity principle, the token holders will make decisions chasing their economic, social and cultural development, building a solid, inclusive and diverse community driven space."
        />
        <TextSection
          align={isMobile ? 'center' : 'flex-end'}
          title="THE ADMINISTRATION OF THE COMMUNITY IN THE HANDS OF THE DAO"
          text="Our roadmap takes us into the democratization of decision making on every step of the platform. A great tool for participative governance at the hands of members of the community, building a collective destiny full of transparency and inclusivity for the benefit of the artistic community. The $SOULYx tokens holders will conform and collectively govern Suspended Soul's DAO, a decentralized organization that will oversee the key parameters of the platform, allocate funds from the Community Treasury, and vote on proposed improvements to the network and protocol."
        />
        <TextSection
          align={isMobile ? 'center' : 'flex-start'}
          title="$SOULYX TOKEN: A NEW VIRTUAL ECONOMY"
          text={`A fixed emision of tokens from the start generates a scarcity effect. With time, this takes the investment into a growing curve and, as the platform expands and the interest around $SOULYx rises, the coin offer remains unaltered. $SOULYx tokens can also be used as a means of exchange. Instead of the "tip jar" that's used by some websites through apps like Venmo or Paypal, fans can donate tokens to compensate the creator. At the same time, art lovers can simply buy their $SOULYx for all the commodities it provides, which includes: access to total experience and immersive art events happening all around the globe on physical galleries and online on different metaverses, as well as access to exclusive art auctions.`}
        />
      </HandSection>
    </>
  );
}

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  margin-top: ${({ theme }) => theme.spacing(-30)};
  > * {
    flex: 1 1 50%;
  }
  @media (max-width: 767px) {
    display: block;
    margin-top: ${({ theme }) => theme.spacing(-8)};
    margin-left: ${({ theme }) => theme.spacing(-3)};
    margin-right: ${({ theme }) => theme.spacing(-3)};
    > * {
      flex: 1;
    }
  }
`
const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(6)};
`

const ImageWrapper = styled.div`
  min-height: 631px;
  position: relative;
  @media (max-width: 767px) {
    min-height: 520px;
  }
`

const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
`

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
  }
`