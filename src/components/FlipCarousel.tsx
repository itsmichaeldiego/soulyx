import React, { useRef } from 'react';
import styled from 'styled-components'

import { FlipCard, IFlipCard } from '../components/FlipCard'

type IFlipCarouselProps = {
  cards: IFlipCard[];
}

export function FlipCarousel({ cards }: IFlipCarouselProps) {
  const scrollRef = useRef(null)
  const handleScroll = (direction: string) => {
    const { current } = scrollRef
    const currentOffset = current?.scrollLeft
    const flipCard = document.getElementsByClassName('js-flip-card')[0]
    debugger;
    const currentSize = flipCard.offsetWidth;
    if (direction === 'left') {
      current?.scroll((currentOffset - currentSize), 0);
    }
    if (direction === 'right') {
      current?.scroll((currentOffset + currentSize), 0);
    }
  }
  return (
    <>
      <Wrapper ref={scrollRef} id="wrapper-id">
        <Box>
          {cards.map((card, index) => (
            <FlipCard key={card.name} card={card} className="js-flip-card" index={index} />
          ))}
        </Box>
      </Wrapper>
      <button onClick={() => handleScroll('left')}>Left</button>
      <button onClick={() => handleScroll('right')}>Right</button>
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