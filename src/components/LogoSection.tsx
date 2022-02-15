import React from 'react';
import styled from 'styled-components';
import Image, { ImageProps } from 'next/image';

import { TokenVideo } from './TokenVideo';

type ILogoSectionTypes = {
  src: string;
  alt: string;
} & ImageProps;

export function LogoSection({ src, alt, ...props }: ILogoSectionTypes) {
  return (
    <Wrapper>
      <TokenVideo />
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

