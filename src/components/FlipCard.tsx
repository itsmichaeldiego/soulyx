import React, { useState, useCallback, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Image from 'next/image';

import { getPad } from '../lib/utils'
import { Mobile, Desktop, useMobileMediaQuery } from '../lib/mediaQueryHelper';

import { Icon } from '../components/Icon'
import { Link } from '../components/Link'

export interface IFlipCard {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  hideName?: boolean;
  viewmoreUrl?: string;
}

type IFlipCardProps = {
  index: number;
  card: IFlipCard;
  className?: string;
}

type IContainerProps = {
  flipped: boolean;
}

export function FlipCard({ card, index, ...props }: IFlipCardProps) {
  const theme = useContext(ThemeContext);
  const [flipped, setFlipped] = useState(false)
  const isMobile = useMobileMediaQuery();

  const handleFlip = useCallback(() => setFlipped(!flipped), [flipped]);

  return (
    <Wrapper onClick={handleFlip} {...props}>
      <Container flipped={flipped}>
        <Front>
          <TopSection>
            <Aside>
              <span>{getPad(index)}</span>
              {!card.hideName && (<span>{card.name}</span>)}
            </Aside>
            <Mobile>
              <Image src={card.imageUrl} alt={card.name} width={150} height={231} />
            </Mobile>
            <Desktop>
              <Image src={card.imageUrl} alt={card.name} width={240} height={360} />
            </Desktop>
          </TopSection>
          <Footer>
            <IconWrapper>
              <Mobile>
                <Icon icon="arrow-right" color={theme.cta.secondary} size={24} />
              </Mobile>
              <Desktop>
                <Icon icon="arrow-right" color={theme.cta.secondary} size={46} />
              </Desktop>
            </IconWrapper>
            <Title>{card.title}</Title>
          </Footer>
        </Front>
        <Back>
          <TopSection>
            <BackAside>
              <span>{getPad(index)}</span>
              <Mobile>
                <Icon icon="arrow-left" size={24} />
              </Mobile>
              <Desktop>
                <Icon icon="arrow-left" size={46} />
              </Desktop>
            </BackAside>
            <Details>
              <Description>{card.description}</Description>
              {card.viewmoreUrl && (
                <ViewMoreLink href={card.viewmoreUrl} target="_blank" onClick={ev => ev.stopPropagation()}>
                  View more
                </ViewMoreLink>
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
  background-color: transparent;
  margin: ${({ theme }) => theme.spacing(0, 2)};
  // flip properties:
  perspective: 1000px;
  @media ${({ theme }) => theme.media.mobile} {
    width: 350px;
    height: 400px;
  }
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
  @media ${({ theme }) => theme.media.mobile} {
    padding-bottom: ${({ theme }) => theme.spacing(8)};
  }
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
  @media ${({ theme }) => theme.media.mobile} {
    font-size: 16px;
    line-height: 16px;
  }
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
  @media ${({ theme }) => theme.media.mobile} {
    font-size: 12px;
    line-height: 14px;
  }
`

const ViewMoreLink = styled(Link)`
  font-size: 14px;
  line-height: 26px;
  font-weight: 300;
  @media ${({ theme }) => theme.media.mobile} {
    font-size: 12px;
    line-height: 14px;
  }
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(10, 3, 3, 6)};
  @media ${({ theme }) => theme.media.mobile} {
    padding: ${({ theme }) => theme.spacing(2, 0, 2, 2)};
  }
`