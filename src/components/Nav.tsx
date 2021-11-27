import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { animateScroll as scroll } from 'react-scroll'

import { Icon } from './Icon';

export function Nav(): JSX.Element {
  const theme = useContext(ThemeContext);

  return (
    <Wrapper>
      <div>
        <Icon icon="hamburger" color={theme.cta.primary} />
      </div>
      <Indicators>
        <span>LOREM</span>
        <Separator />
        <span>INTRO</span>
      </Indicators>
      <GoTopButton onClick={() => scroll.scrollToTop()}>
        <Icon icon="chevrons-up" color={theme.cta.primary} />
        <GoTopText>ON TOP</GoTopText>
      </GoTopButton>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: fixed;
  z-index: 1;
  left: 0;
  width: ${({ theme }) => theme.sizes.nav};
  height: 100vh;
  padding: ${({ theme }) => theme.spacing(5, 0, 3, 2)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  line-height: 12px;
`

const Indicators = styled.div`
  display: flex;
  align-items: center;
  transform: rotate(-90deg);
`

const Separator = styled.div`
  margin: ${({ theme }) => theme.spacing(2)};
  width: ${({ theme }) => theme.spacing(4)};
  height: 1px;
  background: ${({ theme }) => theme.bg.secondary};
`

const GoTopButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${({ theme }) => theme.cta.primary};
  background: none;
  border: none;
  cursor: pointer;
`

const GoTopText = styled.div`
  padding-top: ${({ theme }) => theme.spacing(1)};
  white-space: nowrap;
`