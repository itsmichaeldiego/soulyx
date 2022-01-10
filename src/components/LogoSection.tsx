import React from 'react';
import Image, { ImageProps } from 'next/image';
import styled from 'styled-components';

type ILogoSectionTypes = {
  src: string;
  alt: string;
} & ImageProps;

export function LogoSection({ src, alt, ...props }: ILogoSectionTypes) {
  return (
    <Wrapper>
      <Image src={src} alt={alt} {...props} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: ${({ theme }) => `calc(100vh - ${theme.sizes.header})`}; 
  flex: 1;
  position: relative;
  background-image: url('/images/logo.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 40vw;

  @media ${({ theme }) => theme.media.mobile} {
    background-size: 45vw;
  }
`;