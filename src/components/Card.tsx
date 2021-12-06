import styled from 'styled-components';

import { IRoadmapEntry } from '../sections/Roadmap/types';

type ICardProps = {
  item: IRoadmapEntry;
};

export function Card({ item }: ICardProps) {
  return (
    <Wrapper>
      <HalfCard>
        <CardTitle>{item.name}</CardTitle>
        <CardValue>{item.description}</CardValue>
      </HalfCard>
      <HalfCard>
        <Row>
          <Column>
            <CardTitle>Status</CardTitle>
            <CardValue>{item.status}</CardValue>
          </Column>
          <Column>
            <CardTitle>Year</CardTitle>
            <CardValue>{item.year}</CardValue>
          </Column>
          <Column>
            <CardTitle>Quarter</CardTitle>
            <CardValue>{item.quarter}</CardValue>
          </Column>
        </Row>
      </HalfCard>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 240px;
  background-color: ${({ theme }) => theme.cta.primary};
  border-radius: 8px;
  color: white;
  font-weight: 300;
  // TODO: Review padding
  padding: 14px 0;
`;

const HalfCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(50% - 1px);
  padding: 0 24px;

  &:first-child {
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

const CardTitle = styled.div`
  font-size: 10px;
  margin-bottom: 8px;
`;

const CardValue = styled.div`
  font-size: 14px;
  line-height: 20px;
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  flex-basis: 25%;

  &:first-of-type {
    flex-basis: 50%;
  }
`;
