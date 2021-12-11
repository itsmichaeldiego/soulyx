import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { Section } from '../../components/Section';

type ITextBlockContainerProps = {
  maxWidth: number;
}

export function About() {
  return (
    <Section>
      <SectionContainer>
        <ImagesWrapper>
          <ImageWrapper>
            <Image src="/images/soulx-transparent.svg" alt="SOULx" layout="fill" />
          </ImageWrapper>
          <OverlappingImageWrapper>
            <Image src="/images/astronaut-open-helmet.png" alt="Astronaut" layout="fill" />
          </OverlappingImageWrapper>
        </ImagesWrapper>
        <TextBlockWrapper>
          <TextBlockContainer style={{ marginLeft: 114 }} maxWidth={514}>
            <Title>About Us</Title>
            <Text>Suspended Soul made its blockchain debut at the height of the NFT revolution. With the firm conviction of being protagonists of a historic paradigm shift in the way art is created, shared and collected, as founders of Suspended Soul we decided to offer the community a boutique alternative in a market overloaded with volume. 
              Each artist leaves their soul in their work. Suspended Soul came to honor that creative act. 
              <br /><br />
              One auction at a time. No overlapping, no multiple bidding. Exclusive and total exposure for each work. For each artist behind their work. For every soul.  
            </Text>
          </TextBlockContainer>
        </TextBlockWrapper>
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
        <TextBlockWrapper style={{ marginTop: -36, marginRight: 460, paddingBottom: 0 }}>
          <TextBlockContainer maxWidth={340}>
            <Title>SUSPENDED SOUL FOUNDATION</Title>
            <Text>Suspended Soul Foundation was created with the aim of putting into motion a strategic plan for the crafting of the website, and to start our collective journey towards total decentralization. Among its initial governance functions are: developing the initial website setup, moving forward with the actions needed to execute the strategic plan of the site, taking care of the community treasury and creating optimal conditions to establish good functioning decentralized mechanisms. The launch of the SOULx token and our Decentralized Governance long term vision is the cornerstone towards decentralization.
            </Text>
          </TextBlockContainer>
        </TextBlockWrapper>
        <TextBlockWrapper style={{ marginLeft: 680, paddingTop: '0 !important' }}>
          <TextBlockContainer maxWidth={524}>
            <Title>SUSPENDED SOUL DAO</Title>
            <Text>We are standing at the threshold of a new era. In the near future, it will be the users themselves who will govern the platforms in which they participate. The self-determination of this community is the intrinsic value of this project. This process of property transfer starts with a slow decentralization dynamic which we are proposing. That&apos;s the step that we have been dreaming about since the beginning of it all, not only for our community, but for the entire world. Suspended Soul will be then run by a collective governance led by the SOULx token holders, a decentralized organization with the authority of taking fundamental decisions for the platform like, among other things, the community treasury&apos;s funds distribution and the voting process surrounding adjustments for the platform. Welcome to Suspended Soul DAO.
            </Text>
          </TextBlockContainer>
        </TextBlockWrapper>
      </SectionContainer>
    </Section>
  );
}

const ImagesWrapper = styled.div`
  width: 100%;
  height: 1420px;
  position: relative;
  padding: 20px 0;
`;

const ImageWrapper = styled.div`
  max-width: 1160px;
  min-height: 960px;
  position: relative;
`;

const OverlappingImageWrapper = styled.div`
  width: 787px;
  min-height: 1181px;
  position: absolute;
  top: 240px;
  right: 80px;
`;

const SectionContainer = styled.div`
  position: relative;
`;

const TextBlockWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(8, 0)};
`;

const TextBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 340px;

  ${({ maxWidth }: ITextBlockContainerProps) =>
    maxWidth && `
      max-width: ${maxWidth}px;
    `}
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

const DAOWrapper = styled.div`
  display: flex;
  position: relative;
  height: 544px;
  overflow: hidden;
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
  min-height: 520px;
  position: absolute;
  bottom: 0;
  right: 100px;
  z-index: 2;
`;

const PlusBackground = styled.div`
  width: 1914px;
  min-height: 525px;
  position: absolute;
  top: 232px;
  left: 704px;
  z-index: 1;
`;