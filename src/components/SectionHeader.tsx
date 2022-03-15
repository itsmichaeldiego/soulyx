import React, { useState, useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import { useMobileMediaQuery } from '../lib/mediaQueryHelper';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
if (typeof window !== 'undefined') { gsap.registerPlugin(ScrollTrigger) }

import { Icon } from './Icon';

type ISectionHeaderProps = {
  number: string;
  name: string;
  description: string;
  hideStar?: boolean;
  animStar?: boolean;
  onClick?: () => void;
}

export function SectionHeader({ number, name, description, hideStar, animStar = false, ...props }: ISectionHeaderProps) {
  const [mounted, setMounted] = useState(false);
  const isMobile = useMobileMediaQuery();

  const iconRef = useRef<HTMLDivElement>(null);
  const tl = useRef<any>();

  useLayoutEffect(() => {
    // This is to avoid SSR + useMedia issues
    setMounted(true);

    ScrollTrigger.matchMedia({
      // desktop
      '(min-width: 1024px)': function () {
        if(animStar){
          setTimeout(()=>{
            const icon = iconRef?.current
            if(icon) {
              tl.current = gsap
                .timeline({
                  defaults: { overwrite: 'auto', ease: 'none' },
                  scrollTrigger: {
                    trigger: iconRef?.current,
                    scrub: true,
                    start: '0% 100%',
                    end: '100% 0',
                  },
                })
                .to(
                  icon,
                  {
                    rotation: 720,
                  }
                )
              return function () {
                tl?.current?.kill()
                gsap.set(icon, { clearProps: true })
              }
            }
          }, 1500)
        }
      },
    })
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Wrapper {...props}>
      <HeaderRow><RowText>{number}</RowText></HeaderRow>
      <HeaderRow><RowText>{name}</RowText></HeaderRow>
      <HeaderRow><RowText>{description}</RowText></HeaderRow>
      <HeaderRow>
        {!hideStar && (
          <div ref={iconRef}>
            <Icon icon="star" size={isMobile ? 32 : 88} />
          </div>
        )}
      </HeaderRow>
    </Wrapper>
  );
}

SectionHeader.defaultProps = {
  hideStar: false,
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => theme.spacing(6, 0)};
  padding: ${({ theme }) => theme.spacing(0.5, 0)};
  z-index: 5;

  @media ${({ theme }) => theme.media.mobile} {
    margin: ${({ theme }) => theme.spacing(6, 0)};
  }
`;

const HeaderRow = styled.div`
  align-items: flex-start;
  display: flex;
  flex-basis: 15%;
  font-size: 12px;
  height: 100%;

  &:nth-child(2) {
    flex-basis: 40%;
  }

  &:last-child {
    justify-content: flex-end;
    margin-left: auto;
  }

  @media ${({ theme }) => theme.media.mobile} {
    font-size: 10px;
    &:nth-child(1) {
      flex-basis: 20%;
    }

    &:nth-child(2) {
      flex-basis: 40%;
    }

    &:nth-child(3) {
      flex-basis: 40%;
    }
  }
`;

const RowText = styled.span`
  display: block;
  max-width: 100%;

  @media ${({ theme }) => theme.media.mobile} {
    max-width: 100px;
  }
`;
