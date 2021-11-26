import React from 'react';
import styled from 'styled-components';

import { Header } from './Header'

export function Layout({ children }: React.PropsWithChildren<{}>): JSX.Element {
  return (
    <>
      <Header />
      <Wrapper>
        {children}
      </Wrapper>
      {/* TODO: create Footer component using footer semantic */}
    </>
  )
}

const Wrapper = styled.main`
  // TODO: adapt to mobile layout
  // padding: 0;
  padding: ${({ theme }) => theme.spacing(0, 7)};
`