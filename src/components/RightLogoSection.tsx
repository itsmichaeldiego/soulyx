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
      <TokenVideo />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  margin-right: -200px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  min-height: 80vh;
  height: 100%;
  position: relative;
  max-width: 60vw;

  @media ${({ theme }) => theme.media.mobile} {
    min-height: 168px;
    max-width: 240px;
  }
`

export function TokenVideo({ ...props }) {
  return (
    <TokenVideoWrapper autoPlay muted loop {...props}>
      <source src="https://storage.cloud.google.com/suspendedsoul/Landing/SOULYX_TOKEN.webm" type="video/webm" />
    </TokenVideoWrapper>
  )
}

const TokenVideoWrapper = styled.video`
  width: 480px;
  position: absolute;
  right: -240px;
  top: 50%;
  transform: translate(-50%, -50%);
`
