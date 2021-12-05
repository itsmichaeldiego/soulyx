import React from 'react';
import styled from 'styled-components';

interface ITextSectionProps {
  title: string;
  text: string;
}

export function TextSection({ title, text }: ITextSectionProps): JSX.Element {
  return (
    <Wrapper>
      <Container>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(20, 0)};

  @media (max-width: 767px) {
    padding: ${({ theme }) => theme.spacing(4, 0)};
  }

`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 340px;
`

const Title = styled.h5`
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  margin: ${({ theme }) => theme.spacing(1, 0)};
`

const Text = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
  margin: ${({ theme }) => theme.spacing(1, 0)};
`