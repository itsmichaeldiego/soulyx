import React, { useState, useEffect, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Link, animateScroll as scroll } from 'react-scroll'

import { Icon } from './Icon';
import { Menu } from './Menu';
import { NAV_ITEMS, INavItem } from '../lib/navigation';

const getStepIndex = (steps: INavItem[], stepName: string): number => steps.findIndex((step: INavItem) => step.name === stepName)

export function Nav(): JSX.Element {
  const theme = useContext(ThemeContext);
  const [_currentStep, _setCurrentStep] = useState<INavItem>(NAV_ITEMS[0])
  const [_nextStep, _setNextStep] = useState<INavItem>(NAV_ITEMS[1])

  const [menuOpen, setMenuOpen] = useState(false)

  const handleSetActive = (to: string): void => {
    const stepIndex = getStepIndex(NAV_ITEMS, to);
    if (stepIndex >= 0) {
      if (stepIndex + 1 < NAV_ITEMS.length) {
        _setCurrentStep(NAV_ITEMS[stepIndex])
        _setNextStep(NAV_ITEMS[stepIndex + 1])
      }
    }
  }

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);


  return (
    <>
      <Menu className={menuOpen && 'opened'} onClose={() => setMenuOpen(false)} />
      <Wrapper>
        <IconWrapper onClick={() => setMenuOpen(true)} role="button" style={{ cursor: 'pointer' }}>
          <Icon icon="hamburger" color={theme.cta.primary} size={30} />
        </IconWrapper>
        <Indicators>
          {NAV_ITEMS.map(navItem => {
            return (
              <Link
                key={navItem.name}
                activeClass="active"
                to={navItem.name}
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                onSetActive={handleSetActive}
                style={{ display: 'none' }}
              >
                {navItem.displayName}
              </Link>
            )
          }
          )}
          <Link
            activeClass="active"
            to={_nextStep.name}
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={_nextStep.offset || 0}
            style={{ cursor: 'pointer' }}
          >
            {_nextStep.displayName}
          </Link>
          <Separator />
          <Link
            activeClass="active"
            to={_currentStep.name}
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={_currentStep.offset || 0}
            style={{ cursor: 'pointer' }}
          >
            {_currentStep.displayName}
          </Link>
        </Indicators>
        <GoTopButton onClick={() => scroll.scrollToTop()} role="button">
          <Icon icon="chevrons-up" color={theme.cta.primary} size={12} />
          <GoTopText>ON TOP</GoTopText>
        </GoTopButton>
      </Wrapper>
    </>

  )
}

const Wrapper = styled.nav`
  position: fixed;
  z-index: 1;
  left: 0;
  width: ${({ theme }) => theme.sizes.nav};
  height: 100vh;
  padding: ${({ theme }) => theme.spacing(4, 0, 3, 2)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`

const Indicators = styled.div`
  display: flex;
  align-items: center;
  transform: rotate(-90deg);
  white-space: nowrap;
  font-size: 10px;
  line-height: 12px;
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
  &:hover,
  &:focus {

    svg {
      width: 22px;
      transform: translateX(-3px);
    }

    svg path:nth-child(1) {
      transform: scale(1.5);
    }

    svg path:nth-child(2) {
      display:none;
    }
  }
`

const GoTopText = styled.div`
  padding-top: ${({ theme }) => theme.spacing(1)};
  white-space: nowrap;
  font-size: 10px;
  line-height: 12px;
`

const IconWrapper = styled.div `
transition: 0s;
  &:hover,
  &:focus {
    transform: rotate(180deg) scaleX(-1);
  }
`

/*
const IconRelease = styled.div `
border: 1px solid green;
display: block;

${IconWrapper}:hover & {
  display: none;
}
`
const IconHover = styled.div `
border: 1px solid blue;
display: none;

${IconWrapper}:hover & {
  display: block;
}
`
*/

