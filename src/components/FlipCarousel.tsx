import React from 'react';
import styled from 'styled-components'

import { FlipCard, IFlipCard } from '../components/FlipCard'

type IFlipCarouselProps = {
  cards: IFlipCard[];
}

export function FlipCarousel({ cards }: IFlipCarouselProps) {
  return (
    <>
      <Wrapper>
        <Box>
          {cards.map((card, index) => <FlipCard key={card.name} card={card} index={index} />)}
        </Box>
      </Wrapper>
      <button>Left</button>
      <button>Right</button>
    </>
  )
}

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  overflow-x: hidden;
  padding: ${({ theme }) => theme.spacing(12, 0)};
`

const Box = styled.div`
  display: flex;
  min-width: min-content;
`