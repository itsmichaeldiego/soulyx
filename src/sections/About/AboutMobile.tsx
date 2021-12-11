import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { Section } from '../../components/Section';

export function About() {
  return (
    <Section>
      <SectionContainer>
        <ImagesWrapper>
          <LogoImageWrapper>
            <Image src="/images/soul-background.svg" alt="Soul background" layout="fill" />
          </LogoImageWrapper>
          <LogoImageWrapper>
            <Image src="/images/soulx-background.svg" alt="SOULx background" layout="fill" />
          </LogoImageWrapper>
        </ImagesWrapper>
        <ImageWrapper style={{ marginTop: -70 }}>
          <Image src="/images/astronaut-open-helmet.png" alt="Astronaut open helmet" layout="fill" />
        </ImageWrapper>
        <TextBlockWrapper>
          <Title>About Us</Title>
          <Text>
            Suspended Soul made its blockchain debut at the height of the NFT revolution. With the firm conviction of being protagonists of a historic paradigm shift in the way art is created, shared and collected, as founders of Suspended Soul we decided to offer the community a boutique alternative in a market overloaded with volume. 
            Each artist leaves their soul in their work. Suspended Soul came to honor that creative act. 
            <br /><br />
            One auction at a time. No overlapping, no multiple bidding. Exclusive and total exposure for each work. For each artist behind their work. For every soul.  
          </Text>
        </TextBlockWrapper>
        <ImageWrapper>
          <Image src="/images/astronaut-open-helmet-smoke.png" alt="Astronaut with Smoke" layout="fill" />
        </ImageWrapper>
        <TextBlockWrapper>
          <Title>SUSPENDED SOUL FOUNDATION</Title>
          <Text>
            Suspended Soul Foundation was created with the aim of putting into motion a strategic plan for the crafting of the website, and to start our collective journey towards total decentralization. Among its initial governance functions are: developing the initial website setup, moving forward with the actions needed to execute the strategic plan of the site, taking care of the community treasury and creating optimal conditions to establish good functioning decentralized mechanisms. The launch of the SOULx token and our Decentralized Governance long term vision is the cornerstone towards decentralization.
          </Text>
        </TextBlockWrapper>
        <LogoWrapper>
          <LogoContainer>
            <Image src="/images/logo.png" alt="SOULx logo" layout="fill" />
          </LogoContainer>
          {/* // TODO: Include '+++++' background here somehow (lazy design) */}
        </LogoWrapper>
        <TextBlockWrapper>
          <Title>SUSPENDED SOUL DAO</Title>
          <Text>
            We are standing at the threshold of a new era. In the near future, it will be the users themselves who will govern the platforms in which they participate. The self-determination of this community is the intrinsic value of this project. This process of property transfer starts with a slow decentralization dynamic which we are proposing. That&apos;s the step that we have been dreaming about since the beginning of it all, not only for our community, but for the entire world. Suspended Soul will be then run by a collective governance led by the SOULx token holders, a decentralized organization with the authority of taking fundamental decisions for the platform like, among other things, the community treasury&apos;s funds distribution and the voting process surrounding adjustments for the platform. Welcome to Suspended Soul DAO.
          </Text>
        </TextBlockWrapper>
      </SectionContainer>
    </Section>
  );
}

const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoImageWrapper = styled.div`
  position: relative;
  min-height: 234px;
  margin: 0 ${({ theme }) => theme.spacing(-3, 0)};
`;

const ImageWrapper = styled.div`
  max-width: 327px;
  min-height: 456px;
  position: relative;
`;

const SectionContainer = styled.div`
  position: relative;
`;

const TextBlockWrapper = styled.article`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(8, 0)};

  @media (max-width: 767px) {
    padding: ${({ theme }) => theme.spacing(4, 0)};
  }
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

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 280px;
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`;

const LogoContainer = styled.div`
  position: relative;
  height: 225px;
  width: 225px;
  z-index: 2;
`;
