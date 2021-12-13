import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { FlipCarousel } from '../../components/FlipCarousel'

import { CARDS } from './data';
import { LinkButton } from '../../components/LinkButton';

type ICardProps = {
  variant: string;
}

type IButtonWrapperProps = {
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
        <Card variant="primary">
          <CardTitle>DOWNLOAD PDF FOR INVESTORS</CardTitle>
          <CardText>Click here to read our extended roadmap, our mission and our project explained in detail.</CardText>
          <ButtonWrapper variant="primary" text="DOWNLOAD PDF" href="https://miso.sushi.com/" />
        </Card>
        <Card variant="secondary">
          <CardTitle short>GET SOULX</CardTitle>
          <CardText>Open up a big door into the future and start investing on $SOULx now, a new virtual economy.</CardText>
          <ButtonWrapper variant="secondary" text="GET SOULX" href="https://miso.sushi.com/" />
        </Card>
      </CardsWrapper>
    </>
  )
}

const Title = styled.div`
  font-size: 16vw;
  line-height: 16vw;
  font-family: ${({ theme }) => theme.font.secondary};
`

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing(20, 0, 20, 5)};
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('/images/news-door.png');
`;

const LogosWrapper = styled.div`
  margin: ${({ theme }) => theme.spacing(8)};
  position: relative;
  height: 104px;

  @media (max-width: 767px) {
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
  justify-content: space-between;
  // TODO: extra bottom padding is added because logos svg is not centered - remove this once fixed
  padding-bottom: ${({ theme }) => theme.spacing(3)};

  @media (max-width: 767px) {
    flex-direction: column;
    padding-bottom: ${({ theme }) => theme.spacing(3)};
  }
`;

const Card = styled.div`
  height: 464px;
  width: 640px;
  padding: ${({ theme }) => theme.spacing(6)};
  display: flex;
  flex-direction: column;
  border-radius: 24px;

  ${({ variant }: ICardProps) =>
    variant === 'primary' &&
    `
      // TODO: consume from theme? for some reason it doesn't work here
      background-color: #FF3E12;
      color: white;
      &:hover {
        border: 1px solid #FF3E12;
        background-color: #ECECEC;
        color: #FF3E12;
        ${ButtonWrapper} {
          color: #FF3E12;
          border-color: #FF3E12;
        }
      }
    `}

  ${({ variant }: ICardProps) =>
    variant === 'secondary' &&
    `
      border: 1px solid #FF3E12;
      background-color: #ECECEC;

      &:hover {
        border: none;
        background-color: #FF3E12;
        color: white;
        ${ButtonWrapper} {
          color: white;
          border-color: white;
        }
      }
  `}

  @media (max-width: 767px) {
    padding: ${({ theme }) => theme.spacing(4)};
    height: 360px;
    width: 100%;

    &:first-of-type {
      margin-bottom: ${({ theme }) => theme.spacing(4)};
    }
  }
`;

const CardTitle = styled.span`
  font-family: ${({ theme }) => theme.font.secondary};
  font-size: 66px;
  ${({ short }: ICardTitleProps) => short && `max-width: 224px`};

  @media (max-width: 767px) {
    font-size: 36px;

    ${({ short }: ICardTitleProps) => short && `max-width: 150px`};
  }
`;

const CardText = styled.div`
  max-width: 296px;
  margin: ${({ theme }) => theme.spacing(2, 0)};
  font-weight: 300;
  opacity: 0.9;
  line-height: 24px;

  @media (max-width: 767px) {
    font-size: 12px;
    max-width: 180px;
  }
`;

const ButtonWrapper = styled(LinkButton)`
  align-self: flex-end;
  margin-top: auto;
  padding: ${({ theme }) => theme.spacing(4)};

  ${({ variant }: IButtonWrapperProps) =>
    variant === 'primary' &&
    `
      color: white;
      border-color: white;
    `}

  ${({ variant }: IButtonWrapperProps) =>
    variant === 'secondary' &&
    `
      color: #FF3E12;
      border-color: #FF3E12;
    `}

  @media (max-width: 767px) {
    padding: ${({ theme }) => theme.spacing(2)};
    font-size: 14px;
  }
`;
