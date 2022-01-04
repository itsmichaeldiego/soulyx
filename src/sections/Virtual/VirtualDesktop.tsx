import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { VIRTUAL_CARDS } from './data';
import { MarqueeBackgroundLeft, MarqueeBackgroundRight } from '../../components/MarqueeBackground';

type IColumnImageWrapperProps = {
  height: number;
  width: number;
};

export function Virtual() {
  return (
    <>
      <Jumbotron>
        <FloatingText>SOULx OPENS UP A BIG DOOR INTO THE FUTURE AND NURTURES THE ECONOMIC DESTINY OF ARTISTS, HOLDERS AND COLLECTORS WITH MULTIPLE OPTIONS.</FloatingText>
        <Image src="/images/soulx-jumbotron.svg" alt="SoulX Jumbotron" layout="fill" />
      </Jumbotron>
      <TextBlockWrapper>
        <Title>
          A UNIVERSE OF POSSIBILITIES
        </Title>
        <Text>
          SOULx it&apos;s a ticket straight towards artistic empowerment. It&apos;s the act of sharing and bonding through art, while also celebrating it for what it is and what it could (sooner rather than later) become. It’s a whole virtual economy system built inside Suspended Soul’s own universe, with multiple and alluring diversification alternatives:
        </Text>
      </TextBlockWrapper>
      <ImageColumnsWrapper>
        <ImageColumn>
          <ColumnTitle style={{ paddingLeft: 60 }}>
            <TitleNumber>{VIRTUAL_CARDS[0].number}</TitleNumber>
            <TitleName>{VIRTUAL_CARDS[0].title}</TitleName>
          </ColumnTitle>
          <ColumnImageWrapper height={474} width={360} >
            <Image src={VIRTUAL_CARDS[0].imageUrl} alt="Astronaut helmet" width={360} height={474} />
          </ColumnImageWrapper>
          <Text style={{ marginTop: 30, paddingLeft: 60, maxWidth: 350 }}>{VIRTUAL_CARDS[0].description}</Text>
        </ImageColumn>
        <ImageColumn style={{ marginLeft: '20%', marginTop: 120 }}>
          <ColumnTitle>
            <TitleNumber>{VIRTUAL_CARDS[1].number}</TitleNumber>
            <TitleName>{VIRTUAL_CARDS[1].title}</TitleName>
          </ColumnTitle>
          <ColumnImageWrapper height={624} width={400} >
            <Image src={VIRTUAL_CARDS[1].imageUrl} alt="Physical museums" width={400} height={624} />
          </ColumnImageWrapper>
          <Text style={{ marginTop: 30, maxWidth: 390 }}>{VIRTUAL_CARDS[1].description}</Text>
        </ImageColumn>
      </ImageColumnsWrapper>
      <TokenVirtualWrapper>
        <MarqueeBackgroundLeft url="/images/token-background-text.svg" />
        <MarqueeBackgroundRight url="/images/virtual-background-text.svg" />
        <ImageColumn style={{ position: 'absolute', right: '8%', top: '19%' }}>
          <ColumnTitle>
            <TitleNumber>{VIRTUAL_CARDS[2].number}</TitleNumber>
            <TitleName>{VIRTUAL_CARDS[2].title}</TitleName>
          </ColumnTitle>
          <ColumnImageWrapper height={572} width={390} >
            <Image src={VIRTUAL_CARDS[2].imageUrl} alt="Artistic Events" width={390} height={572} />
          </ColumnImageWrapper>
          <Text style={{ marginTop: 30, maxWidth: 454 }}>{VIRTUAL_CARDS[2].description}</Text>
        </ImageColumn>
      </TokenVirtualWrapper>
      <ImageColumnsWrapper>
        <ImageColumn style={{ marginLeft: 220 }}>
          <ColumnTitle>
            <TitleNumber>{VIRTUAL_CARDS[3].number}</TitleNumber>
            <TitleName>{VIRTUAL_CARDS[3].title}</TitleName>
          </ColumnTitle>
          <ColumnImageWrapper height={624} width={400} >
            <Image src={VIRTUAL_CARDS[3].imageUrl} alt="Face low light" width={400} height={624} />
          </ColumnImageWrapper>
          <Text style={{ marginTop: 30, maxWidth: 400 }}>{VIRTUAL_CARDS[3].description}</Text>
        </ImageColumn>
        <ImageColumn style={{ marginLeft: '15%', marginTop: 300 }}>
          <ColumnTitle>
            <TitleNumber>{VIRTUAL_CARDS[4].number}</TitleNumber>
            <TitleName>{VIRTUAL_CARDS[4].title}</TitleName>
          </ColumnTitle>
          <ColumnImageWrapper height={464} width={390} >
            <Image src={VIRTUAL_CARDS[4].imageUrl} alt="Gamification - Lottery" width={390} height={464} />
          </ColumnImageWrapper>
          <Text style={{ marginTop: 30, maxWidth: 390 }}>{VIRTUAL_CARDS[4].description}</Text>
        </ImageColumn>
      </ImageColumnsWrapper>
    </>
  );
}

const Jumbotron = styled.div`
  background-image: url('/images/soulx-background-person.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 1560px;
  margin-right: -24px;
  padding: ${({ theme }) => theme.spacing(8, 6)};
  position: relative;
`;

const FloatingText = styled.div`
  font-size: 12px;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  margin-bottom: auto;
  margin-left: ${({ theme }) => theme.spacing(2)};
  max-width: 210px;
`;

const TextBlockWrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin-left: 60%;
  max-width: 346px;
  margin-top: ${({ theme }) => theme.spacing(10)};
`;

const Title = styled.h5`
  font-size: 14px;
  font-weight: bold;
  line-height: 24px;
  margin: ${({ theme }) => theme.spacing(1, 0)};
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 28px;
  margin: ${({ theme }) => theme.spacing(1, 0)};
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageColumnsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: ${({ theme }) => theme.spacing(8)};
`;

const ColumnTitle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  padding: ${({ theme }) => theme.spacing(4, 0)};
`;

const TitleNumber = styled.div`
  flex-direction: column;
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

const TitleName = styled.div`
  font-weight: normal;
`;

const ColumnImageWrapper = styled.div`
  ${({ height, width }: IColumnImageWrapperProps) => `
    height: ${height}px;
    width: ${width}px;
  `}
`;

const TokenVirtualWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 160px;
  margin-top: 60px;
  position: relative;
  overflow: hidden;
  margin-left: -72px;
  margin-right: -24px;

  @media ${({ theme }) => theme.media.desktop} {
    ${ImageColumn} {
      top: 30% !important;
      right: 4% !important;
    }
  }
`;
