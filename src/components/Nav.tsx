import React, { useState, useEffect, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { SmoothScrollContext } from '../components/SmoothScrollProvider'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
if (typeof window !== 'undefined') { gsap.registerPlugin(ScrollTrigger) }

import { Icon } from './Icon';
import { Menu } from './Menu';
import { NAV_ITEMS, INavItem } from '../lib/navigation';
import { useMobileMediaQuery } from '../lib/mediaQueryHelper';

const getStepIndex = (steps: INavItem[], stepName: string): number => steps.findIndex((step: INavItem) => step.name === stepName)

export function Nav(): JSX.Element {
  const { scroll } = useContext(SmoothScrollContext)
  const isMobile = useMobileMediaQuery();
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

  const goToSection = (to: string): void => {
    /* @ts-ignore */
    scroll && scroll.scrollTo(
      `[data-section-id=${to}]`,
      { offset: isMobile ? -96 : 0 }
    )
  }

  /* @ts-ignore */
  const goToTop = event => {
    event.preventDefault()
    /* @ts-ignore */
    scroll && scroll.scrollTo(0)
  }

  useEffect(() => {
    setTimeout(()=>{
      /* @ts-ignore */
      let scrollTriggerInstances = []

      NAV_ITEMS.forEach(element => {
        let selector = '[data-section-id="' + element.name + '"]';

        scrollTriggerInstances.push(
          ScrollTrigger.create({
            trigger: selector,
            start: "top 5%",
            end: "bottom 5%",
            onEnter: ((instance:any) => {
              handleSetActive(instance.trigger.dataset["sectionId"])
            }),
            onEnterBack: ((instance:any) => {
              handleSetActive(instance.trigger.dataset["sectionId"])
            }),
          })
        )
      });
    }, 1500)
  }, []);

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
      <Wrapper data-scroll data-scroll-sticky data-scroll-target="#smooth-scroll">
        <IconWrapper onClick={() => setMenuOpen(true)} role="button" style={{ cursor: 'pointer' }} aria-label="Menu toggle">
          <Icon icon="hamburger" color={theme.cta.primary} size={30} />
        </IconWrapper>
        <Indicators>
          <a
            onClick={()=>goToSection(_nextStep.name)}
            style={{ cursor: 'pointer' }}
          >
            {_nextStep.displayName}
          </a>
          <Separator />
          <a
            onClick={()=>goToSection(_currentStep.name)}
            style={{ cursor: 'pointer' }}
          >
            {_currentStep.displayName}
          </a>
        </Indicators>
        <GoTopButton
          onClick={goToTop}
          role="button"
          aria-label="Go to top"
        >
          <Icon icon="chevrons-up" color={theme.cta.primary} size={12} />
          <GoTopText>ON TOP</GoTopText>
        </GoTopButton>
      </Wrapper>
    </>

  )
}

const Wrapper = styled.nav`
  position: fixed;
  z-index: 999;
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

