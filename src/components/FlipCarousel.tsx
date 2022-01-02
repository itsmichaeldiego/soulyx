import React, { useRef } from 'react';
import styled from 'styled-components'

import { Icon } from './Icon';
import { FlipCard, IFlipCard } from './FlipCard'

type IFlipCarouselProps = {
  cards: IFlipCard[];
}

const FLIP_CARD_CLASSNAME = 'js-flip-card';

export function FlipCarousel({ cards }: IFlipCarouselProps) {
  const scrollRef = useRef(null)
  const handleScroll = (direction: string) => {
    const { current } = scrollRef
    const currentOffset = current?.scrollLeft
    const flipCard = document.getElementsByClassName(FLIP_CARD_CLASSNAME)[0]
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
            <FlipCard key={card.name} card={card} className={FLIP_CARD_CLASSNAME} index={index} />
          ))}
        </Box>
      </Wrapper>
      <div role="button" onClick={() => handleScroll('left')}>
        <Icon icon="arrow-left" size={46} />
      </div>
      <div role="button" onClick={() => handleScroll('right')}>
        <Icon icon="arrow-right" size={46} />
      </div>
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