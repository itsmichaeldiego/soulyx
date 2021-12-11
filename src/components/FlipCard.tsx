import React, { useState, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Image from 'next/image';

import { Icon } from '../components/Icon'

export function FlipCard() {
  const theme = useContext(ThemeContext);
  return (
    <Wrapper>
      <ImageSection>
        <ImageText>
          <span>{'01'}</span>
          <span>QUINTO</span>        
        </ImageText>
        <div>
          <Image src="/images/quinto.png" alt="Quinto" width="240" height="360" />
        </div>
      </ImageSection>
      <Footer>
        <IconWrapper>
          <Icon icon="arrow-right" color={theme.cta.secondary} size={46} />
        </IconWrapper>
        <Title>
          KNOW OUR  LOREM IPSUM FORM SUSPENDED SOUL LOREM
        </Title>
      </Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 527px;
  height: 640px;
  padding: ${({ theme }) => theme.spacing(3)};

  color: ${({ theme }) => theme.text.secondary};
  background: ${({ theme }) => theme.bg.secondary};
  border-radius: 20px;
`;

const ImageSection = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  line-height: 17px;
`

const ImageText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Footer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const Title = styled.h5`
  margin: 0;
  font-family: ${({ theme }) => theme.font.secondary};
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
`

const IconWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`