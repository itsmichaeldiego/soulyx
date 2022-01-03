import React from 'react';
import styled from 'styled-components'
import { Element, scroller } from 'react-scroll';
import nextId from 'react-id-generator';

import { Icon } from './Icon';
import { FlipCard, IFlipCard } from './FlipCard'

type IFlipCarouselProps = {
  cards: IFlipCard[];
}

const FLIP_CARD_CLASSNAME = 'js-flip-card';

export function FlipCarousel({ cards }: IFlipCarouselProps) {
  const [currentCardIndex, setCurrentCardIndex] = React.useState(0);
  const containerId = nextId('container-id');

  const handleScroll = (direction: string) => {
    let cardToScroll, newIndex = 0;
    if (direction === 'left') {
      if (currentCardIndex - 1 >= 0) {
        newIndex = currentCardIndex - 1;
      } else {
        newIndex = 0;
      }
    }
    if (direction === 'right') {
      if (currentCardIndex + 1 < cards.length - 1) {
        newIndex = currentCardIndex + 1;
      } else {
        newIndex = cards.length - 1
      }
    }
    cardToScroll = cards[newIndex]
    scroller.scrollTo(cardToScroll.name, {
      duration: 1000,
      smooth: true,
      horizontal: true,
      containerId: containerId
    })
    setCurrentCardIndex(newIndex);
  }

  return (
    <>
      {/* TODO: pass container id by prop */}
      <Wrapper id={containerId}>
        <Box>
          {cards.map((card, index) => (
            <Element key={card.name} name={card.name}>
              <FlipCard card={card} className={FLIP_CARD_CLASSNAME} index={index} />
            </Element>
          ))}
        </Box>
      </Wrapper>
      <Actions>
        <ArrowButton
          role="button"
          onClick={() => handleScroll('left')}
          isDisabled={currentCardIndex === 0}
        >
          <Icon icon="arrow-left" size={46} />
        </ArrowButton>
        <ArrowButton
          role="button"
          onClick={() => handleScroll('right')}
          isDisabled={currentCardIndex === cards.length - 1}
        >
          <Icon icon="arrow-right" size={46} />
        </ArrowButton>
      </Actions>
    </>
  )
}

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  overflow-x: hidden;
  padding: ${({ theme }) => theme.spacing(12, 0)};

  @media (max-width: 767px) {
    padding: ${({ theme }) => theme.spacing(6, 0)};
  }
`

const Box = styled.div`
  display: flex;
  min-width: min-content;
`

const Actions = styled.div`
  display: flex;
  > * {
    margin: ${({ theme }) => theme.spacing(0, 2)};
  }
`

type IArrowButtonProps = {
  isDisabled: boolean;
}

const ArrowButton = styled.div`
  cursor: pointer;
  ${({ isDisabled }: IArrowButtonProps) => isDisabled && `
    pointer-events: none;
    opacity: 0.2;
  `}
`