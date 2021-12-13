import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { FlipCarousel } from '../../components/FlipCarousel'

import { CARDS } from './data';

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