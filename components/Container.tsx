import React from 'react';
import styled from 'styled-components';

export function Container({ children }: React.PropsWithChildren<{}>): JSX.Element {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.main`
  // TODO: use units + adapt to mobile layout
  padding: 0;
`