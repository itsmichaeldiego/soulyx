import { useState } from 'react';
import styled from 'styled-components';

import { IRoadmapEntry } from '../sections/Roadmap/types';

import { Card } from './Card';

type IRoadmapCardProps = {
  cards: IRoadmapEntry[];
};

const CARD_LIMIT = 2;

export function RoadmapCards({ cards }: IRoadmapCardProps) {
  const [rowLimit, setRowLimit] = useState(CARD_LIMIT);

  const handleViewMore = () => {
    setRowLimit(rowLimit + 1);
  };

  const visibleCards = cards.slice(0, rowLimit);
  const showViewMore = visibleCards.length !== cards.length;

  return (
    <Wrapper>
      {visibleCards.map(card => (
        <CardWrapper key={card.name}>
          <Card item={card} />
        </CardWrapper>
      ))}
      {showViewMore && <ViewMoreButton onClick={handleViewMore}>View more</ViewMoreButton>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  @media (min-width: 767px) {
    display: none;
  }
`;

const CardWrapper = styled.div`
  margin-bottom: 8px;
`;

const ViewMoreButton = styled.button`
  background-color: ${({ theme }) => theme.bg.primary};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.cta.primary};
  color: ${({ theme }) => theme.cta.primary};
  cursor: pointer;
  height: 64px;
  width: 100%;
`;