import React from 'react';
import { Default, Mobile } from '../lib/mediaQueryHelper';
import { SmoothScrollProvider } from "../components/SmoothScrollProvider";
import styled from 'styled-components';

import { Nav } from './Nav'
import { Header } from './Header'


export function Layout({ children }: React.PropsWithChildren<{}>): JSX.Element {
  return (
    <>
      <SmoothScrollProvider>
        <Nav />
        <Wrapper>
          <Header />
          {children}
        </Wrapper>
      </SmoothScrollProvider>
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

  @media ${({ theme }) => theme.media.mobile} {
    padding: ${({ theme }) => theme.spacing(0, 3)};
    margin-top: ${({ theme }) => theme.sizes.header};
  }
`