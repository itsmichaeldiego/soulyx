import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

type IColumnImageWrapperProps = {
  height: number;
  width: number;
};

export function Virtual() {
  return (
    <>
      <Jumbotron>
        <FloatingText>$SOULx OPENS UP A BIG DOOR INTO THE FUTURE AND NURTURES THE ECONOMIC DESTINY OF ARTISTS, HOLDERS AND COLLECTORS WITH MULTIPLE OPTIONS.</FloatingText>
        <ImageWrapper>
          <Image src="/images/soulx-jumbotron.svg" alt="SoulX Jumbotron" layout="fill" />
        </ImageWrapper>
      </Jumbotron>
      <TextBlockWrapper>
        <Title>
          A UNIVERSE OF POSSIBILITIES
        </Title>
        <Text>
          $SOULx it&apos;s a ticket straight towards artistic empowerment. It&apos;s the act of sharing and bonding through art, while also celebrating it for what it is and what it could (sooner rather than later) become. It’s a whole virtual economy system built inside Suspended Soul’s own universe, with multiple and alluring diversification alternatives:
        </Text>
      </TextBlockWrapper>
      <ImageColumnsWrapper>
        <ImageColumn>
          <ColumnTitle style={{ paddingLeft: 60 }}>
            <TitleNumber>01</TitleNumber>
            <TitleName>METAVERSE</TitleName>
          </ColumnTitle>
          <ColumnImageWrapper height={474} width={360} >
            <Image src="/images/astronaut-helmet.png" alt="Astronaut helmet" width={360} height={474} />
          </ColumnImageWrapper>
          <Text style={{ marginTop: 30, paddingLeft: 60, maxWidth: 350 }}>
            $SOULx represents all of our efforts of integrating a wide prism of possible experiences into one single immersive artistic endeavour. One which will allow all its community members, eager to take part into an integral artistic EXPERIENCE, to dive deep into a project that will make their distant dreams a virtual reality. It is the entrance to a rich universe, full of multidisciplinary and transversal possibilities that mashes together individual and collective realities, formats and timezones.
          </Text>
        </ImageColumn>
        <ImageColumn style={{ marginLeft: 300, marginTop: 120 }}>
          <ColumnTitle>
            <TitleNumber>02</TitleNumber>
            <TitleName>PHYSICAL MUSEUMS</TitleName>
          </ColumnTitle>
          <ColumnImageWrapper height={624} width={400} >
            <Image src="/images/physical-museums.png" alt="Physical museums" width={400} height={624} />
          </ColumnImageWrapper>
          <Text style={{ marginTop: 30, maxWidth: 390 }}>
            We firmly believe that the real change is not only to tear down walls in order to move forward, but to integrate our present experiences into those which are yet to come. We seek to take cryptoart into its next level, one that&apos;s lived as a TOTAL experience. A physical event, a social experience, artistic cycles, virtual encounters made of multiple artistic showcasing isles occupying space throughout our physical and virtual world. There&apos;s no limit to creativity.
          </Text>
        </ImageColumn>
      </ImageColumnsWrapper>
      <TokenVirtualWrapper>
        <LogoImageWrapper style={{ marginLeft: -64, marginRight: -200 }}>
          <Image src="/images/token-background-text.svg" alt="Token background text" layout="fill" />
        </LogoImageWrapper>
        <LogoImageWrapper style={{ marginLeft: -520, marginRight: -150, marginTop: -80 }}>
          <Image src="/images/virtual-background-text.svg" alt="Virtual background text" layout="fill" />
        </LogoImageWrapper>
        <ImageColumn style={{ position: 'absolute', right: 46, top: 200 }}>
          <ColumnTitle>
            <TitleNumber>03</TitleNumber>
            <TitleName>ARTISTIC EVENTS</TitleName>
          </ColumnTitle>
          <ColumnImageWrapper height={572} width={390} >
            <Image src="/images/artistic-events.png" alt="Artistic Events" width={390} height={572} />
          </ColumnImageWrapper>
          <Text style={{ marginTop: 30, maxWidth: 454 }}>
            This journey&apos;s final destination is to turn the tables and transform the ways in which physical, virtual or augmented reality art exhibitions nowadays work. It&apos;s to provide each artist with the economic resources needed for them to be able to exhibit their art in a groundbreaking way. It&apos;s the possibility of coming together and merging with new crowds present on the cryptoart multiverse.
          </Text>
        </ImageColumn>
      </TokenVirtualWrapper>
      <ImageColumnsWrapper>
        <ImageColumn style={{ marginLeft: 220 }}>
          <ColumnTitle>
            <TitleNumber>04</TitleNumber>
            <TitleName>CUSTOMIZED PLATFORM FOR ALL ARTISTS</TitleName>
          </ColumnTitle>
          <ColumnImageWrapper height={624} width={400} >
            <Image src="/images/face-asian-low-light.png" alt="Face low light" width={400} height={624} />
          </ColumnImageWrapper>
          <Text style={{ marginTop: 30, maxWidth: 400 }}>
            The site is an exhibition tool for all artists, no matter whether they have been selected by our curatorial team or not. Every artist who’s a token holder has the chance to upload their work, banner, curatorial comments, and be on every detail to really count with a 100% customized site, fully dedicated to their artistic vision.
          </Text>
        </ImageColumn>
        <ImageColumn style={{ marginLeft: 218, marginTop: 300 }}>
          <ColumnTitle>
            <TitleNumber>05</TitleNumber>
            <TitleName>GAMIFICATION - LOTTERY</TitleName>
          </ColumnTitle>
          <ColumnImageWrapper height={464} width={390} >
            <Image src="/images/gamification.png" alt="Gamification - Lottery" width={390} height={464} />
          </ColumnImageWrapper>
          <Text style={{ marginTop: 30, maxWidth: 390 }}>
            The participation model based on the lottery. The winner gets a chance of purchasing high-priced art pieces making a significantly lower bet than stated.
          </Text>
        </ImageColumn>
      </ImageColumnsWrapper>
    </>
  );
}

const Jumbotron = styled.div`
  background-image: url('/images/soulx-background-person.png');
  background-position: 0% 0%;
  background-repeat: no-repeat;
  background-size: 100%;
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

const ImageWrapper = styled.div`
  bottom: 0;
  height: 1260px;
  position: absolute;
  width: 1220px;
`;

const TextBlockWrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin-left: 800px;
  max-width: 346px;
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

const ImageColumnsWrapper = styled.div`
  display: flex;
  padding-bottom: ${({ theme }) => theme.spacing(8)};
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
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
  margin-bottom: 140px;
  margin-top: 60px;
  position: relative;
`;

const LogoImageWrapper = styled.div`
  min-height: 515px;
  position: relative;
`;