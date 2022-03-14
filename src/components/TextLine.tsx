import React from 'react';
import styled from 'styled-components';

type ITextLineProps = React.PropsWithChildren<{}> &
  React.HTMLAttributes<HTMLElement>;

export function TextLine({ children, style }: React.PropsWithChildren<ITextLineProps>): JSX.Element {
  return (
    <Wrapper style={style}>
      <Text>{children}</Text>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(8, 6)};

  @media ${({ theme }) => theme.media.mobile} {
    padding: ${({ theme }) => theme.spacing(4, 0)};
  }
`

const Text = styled.span`
  font-weight: 400;
  font-size: 12px;
`