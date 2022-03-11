import React, { useEffect, useState } from 'react'; 
import Image from 'next/image';
import styled from 'styled-components';
import { isSafari } from 'react-device-detect';

import { TOKEN_NAME } from '../../dom/token';

import { Section } from '../../components/Section';
import { TextSection } from '../../components/TextSection';
import { AnimatedInnerImage } from '../../components/AnimatedInnerImage';

import { DATA } from './data';

export function About() {
  const [hasWebmSupport, setHasWebmSupport] = useState(true)

  useEffect(()=>{
    isSafari && setHasWebmSupport(false)
  }, [])

  return (
    <Section>
      <SectionContainer>
        <TokenWrapper>
          <Image src="/images/soulx-transparent.svg" alt={TOKEN_NAME} layout="fill" />
        </TokenWrapper>
        <AstronautAndIsologoWrapper>
          <AnimatedInnerImage>
            <OverlappingImageWrapper>
              <Image src="/images/astronaut-open-helmet.png" alt="Astronaut" layout="fill" />
            </OverlappingImageWrapper>
          </AnimatedInnerImage>
          <StyledTextSection
            align="flex-start"
            title={DATA.title}
            text={(
              <>
                {DATA.description.map((desc: string, index: number) => (
                  <>
                    {index > 0 && (
                      <>
                        <br /><br />
                      </>
                    )}
                    {desc}
                  </>
                ))}
              </>
            )}
          />
          <IsologoWrapper data-scroll data-scroll-speed="4">
            { !hasWebmSupport && (
              <Image src="/images/ssoul-logo.png" alt="Ssoul logo" width="931" height="696" />
            ) }
            { hasWebmSupport && (
              <Video autoPlay muted loop>
                <source src="https://storage.googleapis.com/suspendedsoul/Landing/LOGO_SOULXparawebm.webm" type="video/webm" />
              </Video>
            ) }
          </IsologoWrapper>
        </AstronautAndIsologoWrapper>
        <FloatingImageWrapper>
          <FloatingImageContainer>
            <Image src="/images/astronaut-open-helmet-smoke.png" alt="Astronaut with Smoke" layout="fill" />
          </FloatingImageContainer>
        </FloatingImageWrapper>
        <DAOWrapper>
          <PlusBackground>
            <Image src="/images/+++++.svg" alt="+ background" layout="fill" />
          </PlusBackground>
        </DAOWrapper>
        <TextSection
          align="flex-start"
          title="SUSPENDED SOUL FOUNDATION"
          text={
            <>
              {`Suspended Soul Foundation was created with the aim of putting into motion a strategic plan for the crafting of the website, giving a start to our collective journey towards total decentralization.`}
              <br />
              {`${TOKEN_NAME}’s launch and establishment and our long term vision is our master plan’s cornerstone.`}
            </>
          }
        />
        <TextSection
          align="flex-end"
          title="SUSPENDED SOUL DAO"
          text={`We are standing at the threshold of a new era. In the near future, it will be the users themselves who will govern the platforms in which they participate. The self-determination of this community is the intrinsic value of this project. Suspended Soul will be then run by a collective governance led by the ${TOKEN_NAME} token holders,  a decentralized organization with the authority of taking fundamental decisions for the platform like the community treasury's funds distribution, the voting process surrounding platform’s adjustments and creative proposals, decentralized curatorship, and NFT Access Passes for all our events. Welcome to Suspended Soul DAO.`}
        />
      </SectionContainer>
    </Section>
  );
}

const TokenWrapper = styled.div`
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
  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
  }
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

  @media ${({ theme }) => theme.media.tablet} {
    width: 450px;
    height: 600px;
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

const FloatingImageWrapper = styled.div`
  position: relative;
`

const FloatingImageContainer = styled.div`
  position: absolute;
  top: -600px;
  left: -72px;
  width: 270px;
  max-width: 270px;
  height: 416px;
  max-height: 416px;
  @media (max-width: 1200px) {
    top: 0;
  }
`;

const IsologoWrapper = styled.div`
  margin-right: auto;
  margin-top: ${({ theme }) => theme.spacing(32)};
  margin-bottom: ${({ theme }) => theme.spacing(-20)};
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
  top: 2vw;
  left: 55vw;
  z-index: 1;
`;

const StyledTextSection = styled(TextSection)`
  padding: 0;
  padding-top: ${({ theme }) => theme.spacing(12)};
  width: 787px;
  @media ${({ theme }) => theme.media.tablet} {
    max-width: 100%;
  }
  @media ${({ theme }) => theme.media.desktop} {
    width: 920px;
  }
`