import React, { useState, useCallback, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Image from 'next/image';

import { Icon } from '../components/Icon'
import { Link } from '../components/Link'

type IContainerProps = {
  flipped: boolean;
}

export function FlipCard() {
  const theme = useContext(ThemeContext);
  const [flipped, setFlipped] = useState(true)

  const handleFlip = useCallback(() => setFlipped(!flipped), [flipped]);

  return (
    <Wrapper onClick={handleFlip}>
      <Container flipped={flipped}>
        <Front>
          <TopSection>
            <Aside>
              <span>{'01'}</span>
              <span>QUINTO</span>
            </Aside>
            <Image src="/images/quinto.png" alt="Quinto" width="240" height="360" />
          </TopSection>
          <Footer>
            <IconWrapper>
              <Icon icon="arrow-right" color={theme.cta.secondary} size={46} />
            </IconWrapper>
            <Title>
              KNOW OUR LOREM IPSUM FORM SUSPENDED SOUL LOREM
            </Title>
          </Footer>
        </Front>
        <Back>
          <TopSection>
            <BackAside>
              <span>{'01'}</span>
              <Icon icon="arrow-left" size={46} />
            </BackAside>
            <Details>
              <Description>
                Citizen of Citydao, Influenced by Vitalik, Cyberpunk, Collector, and ETH community member, Quinto paired up his avant-garde vision, his professional skills, and his solidity & knowledge of the web3 ecosystem to envision and create Suspended Soul, a boutique worldwide NFT gallery on the rise. 
                He understands the power that community holds, and how to make a project grow into its next phase. Focusing on moving forward step by step is key for him, and that’s the way he leads his team. With his capacity to clearly visualize future scenarios and bring them into fruition, he’s all about long term and outwitting issues that may come up with skill, creativity, patience and drive, always reminding his core team about the heart and soul of the project, which remains intact: power in the hands of the community. 
              </Description>
              <Link href="https://miso.sushi.com/" target="_blank" onClick={ev => ev.stopPropagation()}>
                View more
              </Link>
            </Details>
          </TopSection>
        </Back>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 527px;
  height: 640px;
  cursor: pointer;
  // flip properties:
  background-color: transparent;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  ${({ flipped }: IContainerProps) => flipped && `transform: rotateY(180deg);`}
`

const Sides = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 20px;
  padding: ${({ theme }) => theme.spacing(3)};
`

const Front = styled(Sides)`
  color: ${({ theme }) => theme.text.secondary};
  background: ${({ theme }) => theme.bg.secondary};
`;

const Back = styled(Sides)`
  background: ${({ theme }) => theme.bg.tertiary};
  transform: rotateY(180deg);
`;

const TopSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  line-height: 17px;
`

const Aside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const BackAside = styled(Aside)`
  padding-bottom: ${({ theme }) => theme.spacing(18)};
`

const Footer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const Title = styled.h5`
  margin: 0;
  font-family: ${({ theme }) => theme.font.secondary};
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
`

const IconWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Description = styled.div`
  font-size: 14px;
  line-height: 26px;
  font-weight: 300;
  `
  
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(10, 3, 3, 6)};
`