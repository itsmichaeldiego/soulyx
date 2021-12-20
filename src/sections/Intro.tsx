import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { DiscoverSection } from '../components/DiscoverSection'

export function Intro() {
  return (
    <Wrapper>
      <LogoWrapper>
        <Image src="/images/soulx.svg" alt="SoulX Banner" layout="fill" />
      </LogoWrapper>
      <DiscoverSection text="DISCOVER THE NEW TOKEN BY SUSPENDED SOUL" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const LogoWrapper = styled.div`
  flex: 1;
  min-height: ${({ theme }) => `calc(100vh - ${theme.sizes.header} - ${theme.spacing(12)})`};
  position: relative;
  background-image: url('/images/logo.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 35%;

  @media (max-width: 767px) {
    min-height: 360px;
    background-size: 45%;
  }

  @media (min-width: 1441px) {
    min-height: 660px;
  }
`;