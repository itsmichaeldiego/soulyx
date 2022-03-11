import React, { useContext, useEffect, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { TOKEN_NAME } from '../dom/token';

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
        <Menu className='' onClose={() => setMenuOpen(false)} />
      )}
      <Wrapper>
        <HamburgerButton onClick={() => setMenuOpen(true)} role="button" style={{ cursor: 'pointer' }} aria-label="Hamburg icon">
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
          <LinkButton href="https://miso.sushi.com/" text={`Get ${TOKEN_NAME}`} target="_blank" />
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
  @media ${({ theme }) => theme.media.mobile} {
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
  @media ${({ theme }) => theme.media.mobile} {
    display: block;
  }
`

const Title = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-weight: normal;
  @media ${({ theme }) => theme.media.mobile} {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  @media ${({ theme }) => theme.media.mobile} {
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