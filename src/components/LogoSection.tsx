import React from 'react';
import styled from 'styled-components';
import Image, { ImageProps } from 'next/image';

type ILogoSectionTypes = {
  src: string;
  alt: string;
} & ImageProps;

export function LogoSection({ src, alt, ...props }: ILogoSectionTypes) {
  return (
    <Wrapper>
      <Video autoPlay muted loop>
        <source src="https://storage.cloud.google.com/suspendedsoul/Landing/SOULYX_TOKEN.webm" type="video/webm" />
      </Video>
      <Image src={src} alt={alt} layout="fill" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media ${({ theme }) => theme.media.mobile} {
    min-height: 296px;
  }
`;

const Video = styled.video`
  width: 100%;
  max-height: ${({ theme }) => `calc(100vh - ${theme.sizes.header})`};
  min-width: 100%;
  min-height: 100%;
`
