import React from 'react';
import styled from 'styled-components';

interface ITextSectionProps {
  title: string;
  text: string;
  align?: string;
}

export function TextSection({ title, text, align }: ITextSectionProps): JSX.Element {
  return (
    <Wrapper align={align || 'center'}>
      <Container>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Container>
    </Wrapper>
  )
}

TextSection.defaultProps = {
  align: 'center',
}

const Wrapper = styled.div<{ align: string }>`
  display: flex;
  flex-direction: column;
  ${({ align }) => `align-items: ${align};`}
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(12, 0)};

  @media (max-width: 767px) {
    padding: ${({ theme }) => theme.spacing(6, 0)};
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 440px;
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