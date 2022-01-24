import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { Section } from '../../components/Section';
import { TextSection } from '../../components/TextSection';

export function About() {
  return (
    <Section>
      <SectionContainer>
        <SoulxWrapper>
          <Image src="/images/soulx-transparent.svg" alt="SOULx" layout="fill" />
        </SoulxWrapper>
        <AstronautAndIsologoWrapper>
          <OverlappingImageWrapper>
            <Image src="/images/astronaut-open-helmet.png" alt="Astronaut" layout="fill" />
          </OverlappingImageWrapper>
          <StyledTextSection
            align="flex-start"
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
          <IsologoWrapper>
            <Video autoPlay muted loop>
              <source src="/videos/isologo.webm" type="video/webm" />
            </Video>
          </IsologoWrapper>
        </AstronautAndIsologoWrapper>
        <DAOWrapper>
          <SideImageWrapper>
            <Image src="/images/astronaut-open-helmet-smoke.png" alt="Astronaut with Smoke" layout="fill" />
          </SideImageWrapper>
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

const SoulxWrapper = styled.div`
  max-width: 1160px;
  min-height: 960px;
  position: relative;

  @media ${({ theme }) => theme.media.desktop} {
    max-width: unset;
    height: 1520px;
  }
`;

const AstronautAndIsologoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: -600px;
  margin-left: auto;
  width: 787px;
  @media ${({ theme }) => theme.media.desktop} {
    margin-top: -1100px;
    width: 920px;
  }
`

const OverlappingImageWrapper = styled.div`
  width: 787px;
  height: 1181px;
  position: relative;

  @media ${({ theme }) => theme.media.mobile} {
    padding: ${({ theme }) => theme.spacing(6, 0)};
  }


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
  margin-top: -15vw;
  margin-left: ${({ theme }) => theme.spacing(-9)};
  margin-right: ${({ theme }) => theme.spacing(-3)};

  @media ${({ theme }) => theme.media.desktop} {
    height: 500px;
  }
`;

const SideImageWrapper = styled.div`
  position: relative;
  width: 270px;
  max-width: 270px;
  height: 416px;
  max-height: 416px;
`;

const IsologoWrapper = styled.div`
  margin-right: auto;
  margin-top: ${({ theme }) => theme.spacing(12)};
  width: 36vw;
  z-index: 2;
`;

const Video = styled.video`
  width: 100%;
`

const PlusBackground = styled.div`
  width: 1914px;
  min-height: 525px;
  position: absolute;
  top: 0;
  left: 550px;
  z-index: 1;

  @media ${({ theme }) => theme.media.desktop} {
    top: 0;
    left: 750px;
  }
`;

const StyledTextSection = styled(TextSection)`
  padding: 0;
  padding-top: ${({ theme }) => theme.spacing(12)};
  width: 787px;
  @media ${({ theme }) => theme.media.desktop} {
    width: 920px;
  }
`