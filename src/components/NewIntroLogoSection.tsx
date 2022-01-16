import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

export function IntroLogoSection() {
  return (
    <Wrapper>
      <video autoPlay muted loop className="intro-video">
        <source src="/videos/logo.webm" type="video/mp4" />
      </video>
      <Image src="/images/soulx.svg" alt="SoulX Banner" layout="fill" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;

  .intro-video {
    width: 100%;
    max-height: ${({ theme }) => `calc(100vh - ${theme.sizes.header})`}; 
    min-width: 100%; 
    min-height: 100%;
  }
`;