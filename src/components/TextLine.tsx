import React from 'react';
import styled from 'styled-components';

type ITextLineProps = React.PropsWithChildren<{
  capitalize?: boolean;
}> &
  React.HTMLAttributes<HTMLElement>;

export function TextLine({ capitalize, children, style }: React.PropsWithChildren<ITextLineProps>): JSX.Element {
  return (
    <Wrapper style={style}>
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