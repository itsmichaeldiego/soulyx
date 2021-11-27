import React from 'react';
import styled from 'styled-components';

import { Nav } from './Nav'
import { Header } from './Header'

export function Layout({ children }: React.PropsWithChildren<{}>): JSX.Element {
  return (
    <>
      <Nav />
      <Wrapper>
        <Header />
        {children}
      </Wrapper>
      {/* TODO: create Footer component using footer semantic */}
    </>
  )
}

const Wrapper = styled.main`
  position: relative;
  min-height: ${({ theme }) => `calc(100vh - ${theme.sizes.header})`};
  // TODO: adapt to mobile layout
  // padding: 0;
  padding: ${({ theme }) => theme.spacing(0, 6)};
  padding-left: ${({ theme }) => `calc(${theme.sizes.nav} + ${theme.spacing(2)})`};

`