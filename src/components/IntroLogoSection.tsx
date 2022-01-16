import React from 'react';
import styled from 'styled-components';

import { LogoSection } from './LogoSection';


export function IntroLogoSection() {
  return (
    <Wrapper src="/images/soulx.svg" alt="SoulX Banner" layout="fill" />
  )
}

const Wrapper = styled(LogoSection)`
  min-height: ${({ theme }) => `calc(100vh - ${theme.sizes.header} - ${theme.spacing(12)})`}; 
  background-size: auto ${({ theme }) => `calc(100vh - ${theme.sizes.header} - ${theme.spacing(12)})`};
`;