import React from 'react';
import styled from 'styled-components';

interface ITextSectionProps {
  title: string;
  description: string;
}

export function TextSection({ title, description }: ITextSectionProps): JSX.Element {
  return (
    <Wrapper>
      <h5>{title}</h5>
      <p>{description}</p>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  display: flex;
  align-items: center;
`