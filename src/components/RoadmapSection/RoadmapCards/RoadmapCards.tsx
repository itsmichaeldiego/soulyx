import styled from 'styled-components';

import { IRoadmapEntry } from '../types';

import { Card } from './Card';

type IRoadmapCardProps = {
  cards: IRoadmapEntry[];
};

export function RoadmapCards({ cards }: IRoadmapCardProps) {
  return (
    <Wrapper>
      {cards.slice(0, 2).map(card => (
        <CardWrapper key={card.name}>
          <Card item={card} />
        </CardWrapper>
      ))}
      {/* TODO: Implement functionality */}
      <ViewMoreButton>View more</ViewMoreButton>
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