import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { Section } from '../../components/Section';
import { TextSection } from '../../components/TextSection';

export function About() {
  return (
    <Section>
      <SectionContainer>
        <ImagesWrapper>
          <SoulxWrapper>
            <Image src="/images/soulx-transparent.svg" alt="SOULx" layout="fill" />
          </SoulxWrapper>
          <OverlappingImageWrapper>
            <Image src="/images/astronaut-open-helmet.png" alt="Astronaut" layout="fill" />
          </OverlappingImageWrapper>
        </ImagesWrapper>
        <TextSection
          align="center"
          title="ABOUT US"
          text={(
            <>
              Suspended Soul made its blockchain debut at the height of the NFT revolution. With the firm conviction of being protagonists of a historic paradigm shift in the way art is created, shared and collected, as founders of Suspended Soul we decided to offer the community a boutique alternative in a market overloaded with volume.
              Each artist leaves their soul in their work. Suspended Soul came to honor that creative act.
              <br /><br />
              One auction at a time. No overlapping, no multiple bidding. Exclusive and total exposure for each work. For each artist behind their work. For every soul.
            </>
          )}
        />
        <DAOWrapper>
          <SideImageWrapper>
            <Image src="/images/astronaut-open-helmet-smoke.png" alt="Astronaut with Smoke" layout="fill" />
          </SideImageWrapper>
          <AlphaLogoWrapper>
            <Image src="/images/soulx-logo-alpha.svg" alt="SOULx Logo" layout="fill" />
          </AlphaLogoWrapper>
          <PlusBackground>
            <Image src="/images/+++++.svg" alt="+ background" layout="fill" />
          </PlusBackground>
        </DAOWrapper>
        <TextSection
          align="flex-start"
          title="SUSPENDED SOUL FOUNDATION"
          text="Suspended Soul Foundation was created with the aim of putting into motion a strategic plan for the crafting of the website, and to start our collective journey towards total decentralization. Among its initial governance functions are: developing the initial website setup, moving forward with the actions needed to execute the strategic plan of the site, taking care of the community treasury and creating optimal conditions to establish good functioning decentralized mechanisms. The launch of the SOULx token and our Decentralized Governance long term vision is the cornerstone towards decentralization."
        />
        <TextSection
          align="flex-end"
          title="SUSPENDED SOUL DAO"
          text="We are standing at the threshold of a new era. In the near future, it will be the users themselves who will govern the platforms in which they participate. The self-determination of this community is the intrinsic value of this project. This process of property transfer starts with a slow decentralization dynamic which we are proposing. That&apos;s the step that we have been dreaming about since the beginning of it all, not only for our community, but for the entire world. Suspended Soul will be then run by a collective governance led by the SOULx token holders, a decentralized organization with the authority of taking fundamental decisions for the platform like, among other things, the community treasury&apos;s funds distribution and the voting process surrounding adjustments for the platform. Welcome to Suspended Soul DAO."
        />
      </SectionContainer>
    </Section>
  );
}

const ImagesWrapper = styled.div`
  width: 100%;
  height: 1420px;
  position: relative;
  padding: 20px 0;

  @media ${({ theme }) => theme.media.desktop} {
    height: 1620px;
  }
`;

const SoulxWrapper = styled.div`
  max-width: 1160px;
  min-height: 960px;
  position: relative;

  @media ${({ theme }) => theme.media.desktop} {
    max-width: unset;
    height: 1520px;
  }
`;

const OverlappingImageWrapper = styled.div`
  width: 787px;
  min-height: 1181px;
  position: absolute;
  top: 240px;
  right: 80px;

  @media ${({ theme }) => theme.media.desktop} {
    width: 920px;
    min-height: 1380px;
  }
`;


const SectionContainer = styled.div`
  position: relative;
`;

const DAOWrapper = styled.div`
  display: flex;
  position: relative;
  height: 644px;
  overflow: hidden;
  margin-top: -5vw;

  @media ${({ theme }) => theme.media.desktop} {
    height: 500px;
  }
`;

const SideImageWrapper = styled.div`
  width: 270px;
  min-height: 417px;
  position: absolute;
  top: -80px;
  left: 0;
`;

const AlphaLogoWrapper = styled.div`
  width: 967px;
  min-height: 460px;
  position: absolute;
  bottom: 120px;
  right: 100px;
  z-index: 2;

  @media ${({ theme }) => theme.media.desktop} {
    width: 1340px;
  }
`;

const PlusBackground = styled.div`
  width: 1914px;
  min-height: 525px;
  position: absolute;
  top: 232px;
  left: 704px;
  z-index: 1;

  @media ${({ theme }) => theme.media.desktop} {
    top: 100px;
    left: 860px;
  }
`;