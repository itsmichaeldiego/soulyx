import React from 'react';
import styled from 'styled-components';

interface ITextLineProps {
  capitalize?: boolean;
}

export function TextLine({ capitalize, children }: React.PropsWithChildren<ITextLineProps>): JSX.Element {
  return (
    <Wrapper>
      <Text capitalize={capitalize}>{children}</Text>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(6, 6)};

  @media (max-width: 767px) {
    padding: ${({ theme }) => theme.spacing(4, 0)};
  }
`

const Text = styled.span`
  font-weight: 300;
  font-size: 12px;

  ${({ capitalize }: ITextLineProps) =>
    capitalize && `
      text-transform: uppercase;
    `}
`