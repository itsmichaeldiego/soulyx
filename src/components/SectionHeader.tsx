import React, { useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { useMobileMediaQuery } from '../lib/mediaQueryHelper';

import { Icon } from './Icon';

type ISectionHeaderProps = {
  number: string;
  name: string;
  description: string;
}

export function SectionHeader({ number, name, description }: ISectionHeaderProps) {
  const [mounted, setMounted] = useState(false);
  const isMobile = useMobileMediaQuery();

  useLayoutEffect(() => {
    // This is to avoid SSR + useMedia issues
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Wrapper>
      <HeaderRow><RowText>{number}</RowText></HeaderRow>
      <HeaderRow><RowText>{name}</RowText></HeaderRow>
      <HeaderRow><RowText>{description}</RowText></HeaderRow>
      <HeaderRow><Icon icon="star" size={isMobile ? 32 : 88} /></HeaderRow>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => theme.spacing(6, 0)};
  padding: ${({ theme }) => theme.spacing(0.5, 0)};

  @media (max-width: 767px) {
    margin: ${({ theme }) => theme.spacing(4, 0)};
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

  @media (max-width: 767px) {
    max-width: 100px;
  }
`;
