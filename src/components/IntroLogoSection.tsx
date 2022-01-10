import React from 'react';
import Image, { ImageProps } from 'next/image';
import styled from 'styled-components';

import { LogoSection } from './LogoSection';

type ILogoSectionTypes = {
  src: string;
  alt: string;
} & ImageProps;

export function IntroLogoSection({ src, alt, ...props }: ILogoSectionTypes) {
  return (
    <Wrapper src={src} alt={alt} />
  )
}

const Wrapper = styled(LogoSection)`
  min-height: ${({ theme }) => `calc(100vh - ${theme.sizes.header} - ${theme.spacing(12)})`}; 
  background-size: auto ${({ theme }) => `calc(100vh - ${theme.sizes.header} - ${theme.spacing(12)})`};
`;