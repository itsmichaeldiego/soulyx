import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { FlipCarousel } from '../../components/FlipCarousel'

import { CARDS } from './data';
import { LinkButton } from '../../components/LinkButton';
import { ITheme } from '../../styles/theme';

type ICardProps = {
  theme: ITheme;
  variant: string;
}

type IButtonWrapperProps = {
  theme: ITheme;
  variant: string;
}

type ICardTitleProps = {
  short?: boolean;
}

export function LastNews() {
  return (
    <>
      <Wrapper>
        <Title>LAST NEWS</Title>
        <FlipCarousel cards={CARDS} />
      </Wrapper>
      <LogosWrapper>
        <Image src="/images/partner-logos.svg" alt="Partner logos" layout="fill" />
      </LogosWrapper>
      <CardsWrapper>
        <CardItem>
          <Card variant="primary">
            <div>
              <CardTitle>DOWNLOAD PDF FOR INVESTORS</CardTitle>
              <CardText>Click here to read our extended roadmap, our mission and our project explained in detail.</CardText>
            </div>
            <ButtonWrapper variant="primary" text="DOWNLOAD PDF" href="https://miso.sushi.com/" />
          </Card>
        </CardItem>
        <CardItem>
          <Card variant="secondary">
            <div>
              <CardTitle short>GET SOULx</CardTitle>
              <CardText>Open up a big door into the future and start investing on $SOULx now, a new virtual economy.</CardText>
            </div>
            <ButtonWrapper variant="secondary" text="GET SOULx" href="https://miso.sushi.com/" />
          </Card>
        </CardItem>
      </CardsWrapper>
    </>
  )
}


const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing(20, 5, 20, 10)};
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('/images/news-door.png');
  margin-left: ${({ theme }) => theme.spacing(-9)};
  margin-right: ${({ theme }) => theme.spacing(-3)};

  @media (max-width: 991px) {
    margin-left: ${({ theme }) => theme.spacing(-3)};
    padding: ${({ theme }) => theme.spacing(10, 2, 10, 2)};
  }
`;

const LogosWrapper = styled.div`
  margin: ${({ theme }) => theme.spacing(8)};
  position: relative;
  height: 104px;

  @media (max-width: 991px) {
    // TODO: remove when adding animated svg
    display: none;
    margin: ${({ theme }) => theme.spacing(4)};
    height: 72px;
    width: 666px;
    // TODO: Add animations at svg level - not here
    @keyframes slidein {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
    animation: 8s slidein linear infinite;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacing(4, 0)};
  
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const CardItem = styled.div`
  display: flex;
  flex: 1 1 50%;
  padding: 1vw;
  &:first-of-type {
    justify-content: flex-end;
  }
  &:last-of-type {
    justify-content: flex-start;
  }
  @media (max-width: 991px) {
    justify-content: center !important;
  }
`

const Title = styled.div`
  font-size: 15vw;
  line-height: 15vw;
  font-family: ${({ theme }) => theme.font.secondary};
`

const Card = styled.div`
  max-height: 464px;
  width: 32vw;
  max-width: 640px;
  width: 44vw;
  padding: ${({ theme }) => theme.spacing(6)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: ${({ theme }) => theme.spacing(3)};

  ${({ theme, variant }: ICardProps) =>
    variant === 'primary' && `
      background-color: ${theme.bg.secondary};
      color: white;
    `}

  ${({ theme, variant }: ICardProps) =>
    variant === 'secondary' &&
    `
      border: 1px solid ${theme.border.primary};
      background-color: ${theme.bg.primary};
  `}

  @media (max-width: 991px) {
    padding: ${({ theme }) => theme.spacing(4)};
    height: 348px;
    width: 480px;
    max-width: 100%;

    &:first-of-type {
      margin-bottom: ${({ theme }) => theme.spacing(4)};
    }
  }
`;

const CardTitle = styled.span`
  font-family: ${({ theme }) => theme.font.secondary};
  font-size: 3vw;
  ${({ short }: ICardTitleProps) => short && `max-width: 224px`};

  @media (max-width: 991px) {
    font-size: 36px;

    ${({ short }: ICardTitleProps) => short && `max-width: 150px`};
  }
`;

const CardText = styled.div`
  max-width: 15vw;
  font-weight: 300;
  font-size: 1vw;
  opacity: 0.9;
  line-height: 24px;
  margin-top: ${({ theme }) => theme.spacing(2)};

  @media (max-width: 991px) {
    font-size: 12px;
    max-width: 180px;
  }
`;

const ButtonWrapper = styled(LinkButton)`
  align-self: flex-end;
  padding: ${({ theme }) => theme.spacing(4)};

  ${({ theme, variant }: IButtonWrapperProps) =>
    variant === 'primary' &&
    `
      color: ${theme.text.tertiary};
      border-color: ${theme.border.secondary};
    `}

  ${({ theme, variant }: IButtonWrapperProps) =>
    variant === 'secondary' &&
    `
      color: ${theme.text.primary};
      border-color: ${theme.border.primary};
    `}

  @media (max-width: 991px) {
    padding: ${({ theme }) => theme.spacing(2)};
    font-size: 14px;
  }
`;
