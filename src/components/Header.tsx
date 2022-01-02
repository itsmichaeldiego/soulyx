import React, { useContext, useEffect, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { Mobile } from '../lib/mediaQueryHelper';

import { LinkButton } from './LinkButton';
import { Icon } from './Icon';
import { Menu } from './Menu';

export function Header(): JSX.Element {
  const theme = useContext(ThemeContext);

  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  return (
    <>
      {menuOpen && (
        <Menu onClose={() => setMenuOpen(false)} />
      )}
      <Wrapper>
        <HamburgerButton onClick={() => setMenuOpen(true)} role="button" style={{ cursor: 'pointer' }}>
          <Icon icon="hamburger" color={theme.cta.primary} size={30} />
        </HamburgerButton>
        <Title>
          Suspended Soul
        </Title>
        <Actions>
          {/* <TraductionItems>
          <span>En</span>
          <span>|</span>
          <span>Es</span>
        </TraductionItems> */}
          <LinkButton href="https://miso.sushi.com/" text="Get SOULx" target="_blank" />
        </Actions>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.sizes.header};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  @media (max-width: 767px) {
    margin-bottom: ${({ theme }) => theme.spacing(6)};
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    width: 100vw;
    height: ${({ theme }) => theme.sizes.headerMobile};
    padding: ${({ theme }) => theme.spacing(0, 2)};
    background-color: ${({ theme }) => theme.bg.primary};
    z-index: 9999;
  }
`

const HamburgerButton = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
  }
`

const Title = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-weight: normal;
  @media (max-width: 767px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    display: none;
  }
`

// const TraductionItems = styled.div`
//   display: flex;
//   align-items: center;
//   margin-right: ${({ theme }) => theme.spacing(2.5)};
//   > * {
//     margin: 0 ${({ theme }) => theme.spacing(0.5)};
//   }
// `