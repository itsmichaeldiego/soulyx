import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger)

import { ITheme } from '../../styles/theme';
import { TOKEN_NAME } from '../../dom/token';

import { LinkButton } from '../../components/LinkButton';
import { FlipCarousel } from '../../components/FlipCarousel'

import { CARDS } from './data';

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
  const wrapperRef = useRef<any>()
  const wrapperImageRef = useRef<any>()
  const tl = useRef<any>()

  useEffect(() => {
    const image = wrapperImageRef?.current

    setTimeout(()=>{
      tl.current = gsap
        .timeline({
          defaults: { overwrite: 'auto' },
          scrollTrigger: {
            trigger: wrapperRef?.current,
            scrub: true,
            start: '0% 100%',
            end: '100% 0',
          },
        })
        .addLabel('init')
        .fromTo(
          image,
          {
            scale: 1.3,
          },
          {
            scale: 1,
          },
          'init'
        )
    }, 1500)
  }, [])

  return (
    <>
      <Wrapper ref={wrapperRef}>
        <WrapperImage ref={wrapperImageRef}/>
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
              <CardTitle>DISCOVER {TOKEN_NAME}&apos;s WHITEPAPER</CardTitle>
              <CardText>Click here to read our extended roadmap, our mission and our project explained in detail.</CardText>
            </div>
            <ButtonWrapper variant="primary" text="READ MORE" href="https://miso.sushi.com/" target="_blank" />
          </Card>
        </CardItem>
        <CardItem>
          <Card variant="secondary">
            <div>
              <CardTitle short>{`GET ${TOKEN_NAME}`}</CardTitle>
              <CardText>
                {`Open up a big door into the future and start investing on ${TOKEN_NAME} now, a new virtual economy.`}
              </CardText>
            </div>
            <ButtonWrapper variant="secondary" text={`GET ${TOKEN_NAME}`} href="https://miso.sushi.com/" target="_blank" />
          </Card>
        </CardItem>
      </CardsWrapper>
    </>
  )
}


const Wrapper = styled.div`
background-color: green;
  padding: ${({ theme }) => theme.spacing(20, 5, 20, 10)};
  position: relative;
  margin-left: ${({ theme }) => theme.spacing(-9)};
  margin-right: ${({ theme }) => theme.spacing(-3)};
  overflow: hidden;

  @media ${({ theme }) => theme.media.tablet} {
    margin-left: ${({ theme }) => theme.spacing(-3)};
    padding: ${({ theme }) => theme.spacing(10, 2, 10, 2)};
  }
`;

const WrapperImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('/images/news-door.png');
`;

const LogosWrapper = styled.div`
  margin: ${({ theme }) => theme.spacing(8)};
  position: relative;
  height: 104px;

  @media ${({ theme }) => theme.media.tablet} {
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
  padding: ${({ theme }) => theme.spacing(6, 0)};
  
  @media ${({ theme }) => theme.media.tablet} {
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
  @media ${({ theme }) => theme.media.tablet} {
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
      a:hover {
        background-color: ${theme.bg.tertiary};
        color: ${theme.bg.secondary};
      }
    `}

  ${({ theme, variant }: ICardProps) =>
    variant === 'secondary' &&
    `
      border: 1px solid ${theme.border.primary};
      background-color: ${theme.bg.primary};
  `}

  @media ${({ theme }) => theme.media.tablet} {
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

  @media ${({ theme }) => theme.media.tablet} {
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

  @media ${({ theme }) => theme.media.tablet} {
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

  @media ${({ theme }) => theme.media.tablet} {
    padding: ${({ theme }) => theme.spacing(2)};
    font-size: 14px;
  }
`;
