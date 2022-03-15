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
      <Image src={src} alt={alt} layout="fill" objectFit='contain' objectPosition='top'/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 70vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media ${({ theme }) => theme.media.mobile} {
    min-height: 296px;
  }
`;

