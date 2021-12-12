import React from 'react';
import styled from 'styled-components'

import { FlipCard } from '../components/FlipCard'

export function FlipCarousel() {
  return (
    <Wrapper>
      <Box>
        <FlipCard />
        <FlipCard />
        <FlipCard />
        <FlipCard />
      </Box>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  overflow-y: visible;
  overflow-x: auto;
`

const Box = styled.div`
  display: flex;
  overflow-y: visible;
  min-width: min-content;
`