import React from 'react';
import styled from 'styled-components'

import { FlipCarousel } from '../../components/FlipCarousel'

import { CARDS } from './data';

export function LastNews() {
  return (
    <Wrapper>
      <Title>LAST NEWS</Title>
      <FlipCarousel cards={CARDS} />
    </Wrapper>
  )
}

const Title = styled.div`
  font-size: 238px;
  line-height: 215px;
  font-family: ${({ theme }) => theme.font.secondary};
`

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing(20, 0, 20, 5)};
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('/images/news-door.png');
`;