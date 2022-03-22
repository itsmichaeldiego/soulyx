import React, { useEffect, useState } from 'react'; 
import styled from 'styled-components';
import { isSafari } from 'react-device-detect';
import Image, { ImageProps } from 'next/image';

type ILogoSectionTypes = {
  src: string;
  alt: string;
} & ImageProps;

export function RightLogoSection({ src, alt }: ILogoSectionTypes) {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={src} alt={alt} layout="fill" objectPosition="top left" objectFit='contain' />
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
  min-height: 40vw;
  height: 100%;
  position: relative;
  min-width: 60vw;
  z-index: 1;
  @media ${({ theme }) => theme.media.mobile} {
    max-width: 100%;
	  min-height: 60vw;
  }
`

export function CustomTokenVideo({ ...props }) {
  const [hasWebmSupport, setHasWebmSupport] = useState(true)

  useEffect(()=>{
    isSafari && setHasWebmSupport(false)
  }, [])
  
  return (
    <TokenVideoWrapperOuter data-scroll data-scroll-speed="4">
      <TokenVideoWrapper autoPlay muted loop {...props}>
        { !hasWebmSupport && (
          <source src="/videos/SOULX1.mp4" type="video/mp4" />
        ) }
        { hasWebmSupport && (
          <source src="/videos/SOULX1.webm" data-test={ isSafari } type="video/webm" />
        ) }
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
