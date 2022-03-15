import React from 'react';
import styled from 'styled-components';

import { FlipCarousel } from '../../components/FlipCarousel'

import { CARDS } from './data';

export function Team() {
  return (
    <StyledSection>
      <FlipCarousel cards={CARDS} />
    </StyledSection>
  )
}

const StyledSection = styled.section`
  @media ${({ theme }) => theme.media.desktop} {
    margin-top: -5vw;
  }
`