import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { DiscoverSection } from '../components/DiscoverSection'

export function Intro() {
  return (
    <>
      <Wrapper>
        <LogoWrapper>
          <Image src="/images/soulx.svg" alt="SoulX Banner" layout="fill" />
        </LogoWrapper>
      </Wrapper>
      <DiscoverSection text="DISCOVER THE NEW TOKEN BY SUSPENDED SOUL" />
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: ${({ theme }) => `calc(100vh - ${theme.sizes.header} - ${theme.spacing(12)})`};
`

const LogoWrapper = styled.div`
  flex: 1;
  position: relative;
  background-image: url('/images/logo.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 40vw;

  @media ${({ theme }) => theme.media.mobile} {
    min-height: 360px;
    background-size: 45vw;
  }

  @media ${({ theme }) => theme.media.desktop} {
    min-height: 660px;
    background-size: 60vh;
  }
`;