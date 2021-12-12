import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { DiscoverSection } from '../components/DiscoverSection'

export function Intro() {
  return (
    <>
      <LogoWrapper>
        <Image src="/images/soulx.svg" alt="SoulX Banner" layout="fill" objectFit="scale-down" />
      </LogoWrapper>
      <DiscoverSection text="DISCOVER THE NEW TOKEN BY SUSPENDED SOUL" />
    </>
  )
}

const LogoWrapper = styled.div`
  min-height: 584px;
  position: relative;
  background-image: url('/images/logo.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 35%;

  @media (max-width: 767px) {
    max-width: 360px;
    min-height: 256px;
    background-size: 80%;
  }
`;