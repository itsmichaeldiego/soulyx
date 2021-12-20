import React from 'react';
import styled from 'styled-components';

import { Nav } from './Nav'
import { Header } from './Header'
import { useMobileMediaQuery } from '../lib/mediaQueryHelper';

export function Layout({ children }: React.PropsWithChildren<{}>): JSX.Element {
  const isMobile = useMobileMediaQuery();
  return (
    <>
      {!isMobile && <Nav />}
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
  padding: ${({ theme }) => theme.spacing(0, 3, 6, 0)};
  padding-left: ${({ theme }) => `calc(${theme.sizes.nav} + ${theme.spacing(2)})`};
  margin: 0 auto;

  @media (max-width: 767px) {
    padding: ${({ theme }) => theme.spacing(0, 3)};
    margin-top: ${({ theme }) => theme.sizes.header};
  }
`