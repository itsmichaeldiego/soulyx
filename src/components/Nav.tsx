import React, { useState, useContext, useMemo } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Link, animateScroll as scroll, scroller } from 'react-scroll'

import { Icon } from './Icon';

interface INavItem {
  name: string;
  text: string;
  offset?: number;
}

export const NAV_ITEMS: INavItem[] = [
  {
    name: 'intro',
    text: 'Intro',
    offset: -96,
  },
  {
    name: 'decentralization',
    text: 'Decentralization',
  },
  {
    name: 'community',
    text: 'Community',
  },
  {
    name: 'genesis',
    text: 'Genesis',
  },
  {
    name: 'roadmap',
    text: 'Roadmap',
  },
  {
    name: 'about',
    text: 'About',
  },
  {
    name: 'thanks',
    text: 'Thanks',
  }
]

const getStepIndex = (steps: INavItem[], stepName: string): number => steps.findIndex((step: INavItem) => step.name === stepName)

export function Nav(): JSX.Element {
  const theme = useContext(ThemeContext);
  const [_currentStep, _setCurrentStep] = useState<INavItem>(NAV_ITEMS[0])
  const [_nextStep, _setNextStep] = useState<INavItem>(NAV_ITEMS[1])

  const currentStep = NAV_ITEMS[0]
  const nextStep = NAV_ITEMS[1]

  const handleScroll = (step: INavItem): void => {
    scroller.scrollTo(step.name, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: step.offset || 0,
    });
  }

  const handleSetActive = (to: string): void => {
    const stepIndex = getStepIndex(NAV_ITEMS, to);
    if (stepIndex >= 0) {
      _setCurrentStep(NAV_ITEMS[stepIndex])
      _setNextStep(NAV_ITEMS[stepIndex + 1])
    }
  }
  return (
    <Wrapper>
      <div>
        <Icon icon="hamburger" color={theme.cta.primary} size={30} />
      </div>
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
              {navItem.text}
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
          {_nextStep.text}
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
          {_currentStep.text}
        </Link>
        {/* <AnchorButton onClick={() => handleScroll(nextStep)}>{nextStep.name.toUpperCase()}</AnchorButton>
        <AnchorButton onClick={() => handleScroll(currentStep)}>{currentStep.name.toUpperCase()}</AnchorButton> */}
      </Indicators>
      <GoTopButton onClick={() => scroll.scrollToTop()}>
        <Icon icon="chevrons-up" color={theme.cta.primary} size={12} />
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
  padding: ${({ theme }) => theme.spacing(4, 0, 3, 2)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
  font-size: 10px;
  line-height: 12px;
`

const AnchorButton = styled.button`
  color: ${({ theme }) => theme.cta.primary};
  background: none;
  border: none;
  cursor: pointer;
  font-size: 10px;
  line-height: 12px;
`