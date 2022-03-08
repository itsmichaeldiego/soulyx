import React from 'react';
import styled from 'styled-components';
import Image, { ImageProps } from 'next/image';

type ILogoSectionTypes = {
  src: string;
  alt: string;
} & ImageProps;

export function RightLogoSection({ src, alt }: ILogoSectionTypes) {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={src} alt={alt} layout="fill" objectPosition="top left" />
      </ImageWrapper>
      <CustomTokenVideo />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  margin-right: -200px;
  @media ${({ theme }) => theme.media.mobile} {
    margin-right: 0;
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  min-height: 80vh;
  height: 100%;
  position: relative;
  max-width: 60vw;
  z-index: 1;
  @media ${({ theme }) => theme.media.mobile} {
    max-width: 100%;
  }
`

export function CustomTokenVideo({ ...props }) {
  return (
    <TokenVideoWrapperOuter data-scroll data-scroll-speed="4">
      <TokenVideoWrapper autoPlay muted loop {...props}>
        <source src="https://storage.cloud.google.com/suspendedsoul/Landing/SOULYX_TOKEN.webm" type="video/webm" />
      </TokenVideoWrapper>
    </TokenVideoWrapperOuter>
  )
}

const TokenVideoWrapper = styled.video`
  max-width: 480px;
  width: 100%;
  position: absolute;
  right: -240px;
  top: 50%;
  transform: translate(-50%, -50%);

  @media ${({ theme }) => theme.media.tablet} {
    max-width: 240px;
    width: 100%;
    left: 50%;
  }
`
const TokenVideoWrapperOuter = styled.div`
  width: 100%;
`
