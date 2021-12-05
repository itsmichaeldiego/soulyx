import React from 'react';
import styled from 'styled-components';

import { Icon } from './Icon';

type ISectionHeaderProps = {
  number: string;
  name: string;
  description: string;
}

export function SectionHeader({ number, name, description }: ISectionHeaderProps) {
  return (
    <Wrapper>
      <HeaderRow><RowText>{number}</RowText></HeaderRow>
      <HeaderRow><RowText>{name}</RowText></HeaderRow>
      <HeaderRow><RowText>{description}</RowText></HeaderRow>
      {/* // TODO: Consume SVG - Figma export is currently broken */}
      <HeaderRow><Icon icon="star" size={88} /></HeaderRow>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(1, 0)};

  @media (max-width: 767px) {
    padding: ${({ theme }) => theme.spacing(1, 0)};
  }
`;

const HeaderRow = styled.div`
  align-items: flex-start;
  display: flex;
  flex-basis: 15%;
  font-size: 12px;
  height: 100%;

  &:nth-child(2) {
    flex-basis: 40%;
  }

  &:last-child {
    justify-content: flex-end;
    margin-left: auto;
  }

  @media (max-width: 767px) {
    font-size: 10px;
    &:nth-child(1) {
      flex-basis: 20%;
    }

    &:nth-child(2) {
      flex-basis: 40%;
    }

    &:nth-child(3) {
      flex-basis: 40%;
    }
  }
`;

const RowText = styled.span`
  display: block;
  max-width: 100%;
`;
