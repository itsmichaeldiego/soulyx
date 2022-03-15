import React from 'react';
import styled from 'styled-components';

import { FlipCarousel } from '../../components/FlipCarousel'

import { CARDS } from './data';

export function Team() {
  return (
    <Wrapper>
      <FlipCarousel cards={CARDS} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-right: ${({ theme }) => theme.spacing(-3)};
  margin-top: -5vw;
`;