import React from 'react';
import Image, { ImageProps } from 'next/image';
import styled from 'styled-components';

type ILogoSectionTypes = {
  src: string;
  alt: string;
} & ImageProps;

export function LogoSection({ src, alt, ...props }: ILogoSectionTypes) {
  return (
    <Wrapper {...props}>
      <Image src={src} alt={alt} layout="fill" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vw;
  position: relative;
  background-image: url('/images/logo.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 480px;

  @media ${({ theme }) => theme.media.mobile} {
    min-height: 296px;
    background-size: contain;
  }
`;
