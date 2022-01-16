import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

export function IntroLogoSection() {
  return (
    <Wrapper>
      <video autoPlay muted  id="myVideo">
        <source src="/videos/logo.mp4" type="video/mp4" />
      </video>

      <Image src="/images/soulx.svg" alt="SoulX Banner" layout="fill" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;

  #myVideo {
    width: 100%;
    max-height: ${({ theme }) => `calc(100vh - ${theme.sizes.header})`}; 
    min-width: 100%; 
    min-height: 100%;
  }

  .content {
    position: absolute;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    color: #f1f1f1;
    width: 100%;
    padding: 20px;
  }
`;