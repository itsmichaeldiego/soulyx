import React from 'react';
import styled from 'styled-components';

import { Nav } from './Nav'
import { Header } from './Header'
import { useDesktopMediaQuery } from '../lib/mediaQueryHelper';

export function Layout({ children }: React.PropsWithChildren<{}>): JSX.Element {
  const isDesktop = useDesktopMediaQuery();
  return (
    <>
      {isDesktop && <Nav />}
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
  padding: ${({ theme }) => theme.spacing(0, 6, 6, 0)};
  padding-left: ${({ theme }) => `calc(${theme.sizes.nav} + ${theme.spacing(2)})`};

  /* mobile queries */
  @media (max-width: 767px) {
    padding: ${({ theme }) => theme.spacing(6, 4, 6, 4)};
  }
`