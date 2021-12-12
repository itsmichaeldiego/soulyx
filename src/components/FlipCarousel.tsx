import React from 'react';
import styled from 'styled-components'

import { FlipCard, IFlipCard } from '../components/FlipCard'

type IFlipCarouselProps = {
  cards: IFlipCard[];
}

export function FlipCarousel({ cards }: IFlipCarouselProps) {
  return (
    <Wrapper>
      <Box>
        {cards.map((card, index) => <FlipCard key={card.name} card={card} index={index} />)}
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