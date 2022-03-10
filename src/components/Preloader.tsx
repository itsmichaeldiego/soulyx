import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap'

import useIntroEnded from '../hooks/useIntroEnded'
import useVideoLoaded from '../hooks/useVideoLoaded';

export function Preloader() {
  const preloaderRef = useRef<HTMLDivElement>(null);
  /* @ts-ignore */
  const { introEnded, setIntroEnded } = useIntroEnded()
  const { videoLoaded } = useVideoLoaded()
  const [exitAnimation, setExitAnimation] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setExitAnimation(true)
    }, 5000)

    if(videoLoaded) {
      setTimeout(() => {
        clearTimeout(timer)
        setExitAnimation(true)
      }, 2000)
    }

    return () => clearTimeout(timer)
  },[videoLoaded])

  useEffect(() => {
    if(exitAnimation){
      gsap.to(preloaderRef.current, {
        duration: 0.3,
        delay: 1,
        autoAlpha: 0,
        onComplete: () => {
          setIntroEnded(true)
        },
      })
    }
  }, [exitAnimation]);

  if (introEnded) return null

  return (
    <Wrapper ref={preloaderRef}>
      <WrapperInner>
        <SvgStyled width="214" height="228" viewBox="0 0 214 228" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" stroke="#FF3E12" strokeWidth="2" strokeMiterlimit="10" 
            d="M94.2,99.8l-0.1-1.4c-1.3-13.7-5.1-28.2-15-43.6L45.5,2.3l0,0l-0.3-0.5L10,1.8v2c0,0,0.2,0.3,0.2,0.3
            l51.7,74.3c7.4,11,17.5,18.1,31,21.1c4.3,1,8.7,1.3,13.6,1.3h0.1c4.8,0,9.7-0.3,13.8-1.3c13.9-2.3,24.3-9.1,32.4-21.1l50.6-75V1.8
            h-32.6c0,0-34.9,53.2-34.9,53.2c-9.9,15-14.8,29.9-16.7,43.3c-0.7,5.1-1,9.9-1,14.4c0,4.5,0.4,9,1.1,13.5
            c2,12.9,7.6,25.8,20.4,44.2l38.1,55.3l0.3,0.4h33.9v-1.7l-0.2-0.3h0l-50.4-70.5c-12.9-17.9-25.7-26-41-28.6l0,0
            c-4.6-1-9-1.3-13.8-1.3v0c-4.8,0-9.3,0.3-13.8,1.3c-14.9,2.9-28.1,11.7-40.7,29L2.1,224.3L2,224.6v1.6h34h0.5l0.3-0.4l38.8-57.6h0
            c11.2-16.6,16.4-29.1,18.3-42c0.7-4.5,1-8.7,1-13.5C94.8,108.5,94.7,104.1,94.2,99.8"
          />
        </SvgStyled>
      </WrapperInner>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  z-index: 999999;
  background-color: ${({ theme }) => theme.bg.primary};

  @media ${({ theme }) => theme.media.mobile} {
    padding: ${({ theme }) => theme.spacing(0, 12)};
    margin-top: -${({ theme }) => theme.sizes.header};
  }
`

const WrapperInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${({ theme }) => theme.media.mobile} {
    height: 90%;
  }
`

const SvgStyled = styled.svg`
  & path {
    stroke-dasharray: 1500;
    stroke-dashoffset: 1500;
    animation: pathAnim 1s ease-in-out 2 forwards .5s;
  }
  
  @keyframes pathAnim {
    0% {
      stroke-dashoffset: 1500;
    }

    100% {
      stroke-dashoffset: 0;
    }
  }
`