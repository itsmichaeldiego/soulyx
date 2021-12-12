import React, { useState, useCallback, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Image from 'next/image';

import { Icon } from '../components/Icon'
import { Link } from '../components/Link'

export interface IFlipCard {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  viewmoreUrl?: string;
}

type IFlipCardProps = {
  index: number;
  card: IFlipCard;
}

type IContainerProps = {
  flipped: boolean;
}

export function FlipCard({ card, index }: IFlipCardProps) {
  const theme = useContext(ThemeContext);
  const [flipped, setFlipped] = useState(false)

  const handleFlip = useCallback(() => setFlipped(!flipped), [flipped]);

  return (
    <Wrapper onClick={handleFlip}>
      <Container flipped={flipped}>
        <Front>
          <TopSection>
            <Aside>
              {/* TODO: add 0 before number 01, 02, 03 for index */}
              <span>{index}</span>
              <span>{card.name}</span>
            </Aside>
            <Image src={card.imageUrl} alt={card.name} width="240" height="360" />
          </TopSection>
          <Footer>
            <IconWrapper>
              <Icon icon="arrow-right" color={theme.cta.secondary} size={46} />
            </IconWrapper>
            <Title>{card.title}</Title>
          </Footer>
        </Front>
        <Back>
          <TopSection>
            <BackAside>
              <span>{'01'}</span>
              <Icon icon="arrow-left" size={46} />
            </BackAside>
            <Details>
              <Description>{card.description}</Description>
              {card.viewmoreUrl && (
                <Link href={card.viewmoreUrl} target="_blank" onClick={ev => ev.stopPropagation()}>
                  View more
                </Link>
              )}
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
  margin-right: ${({ theme }) => theme.spacing(4)};
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
  padding-bottom: ${({ theme }) => theme.spacing(16)};
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