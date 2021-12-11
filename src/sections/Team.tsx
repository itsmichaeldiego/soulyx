import React from 'react';
import styled from 'styled-components'

import { FlipCard } from '../components/FlipCard'

export function Team() {
  return (
    <Wrapper>
      <FlipCard />
      <FlipCard />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
`