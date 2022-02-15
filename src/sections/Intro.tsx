import React from 'react';
import styled from 'styled-components';

import { IntroLogoSection } from '../components/IntroLogoSection'
import { DiscoverSection } from '../components/DiscoverSection'

export function Intro() {
  return (
    <Wrapper>
      <IntroLogoSection />
      <DiscoverSection text="DISCOVER THE NEW TOKEN BY SUSPENDED SOUL" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: ${({ theme }) => `calc(100vh - ${theme.sizes.header})`};
`