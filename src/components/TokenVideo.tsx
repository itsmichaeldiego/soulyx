import React, { useEffect, useState } from 'react'; 
import styled from 'styled-components';
import { isSafari } from 'react-device-detect';

import useVideoLoaded from '../hooks/useVideoLoaded'

export function TokenVideo({ ...props }) {
  /* @ts-ignore */
  const { videoLoaded, setVideoLoaded } = useVideoLoaded()
  const [hasWebmSupport, setHasWebmSupport] = useState(true)

  const canplaythrough = ()=>{
    !videoLoaded && setVideoLoaded(true)
  }

  useEffect(()=>{
    isSafari && setHasWebmSupport(false)
  }, [])

  return (
    <WrapperOuter  data-scroll data-scroll-speed="-4">
      <Wrapper autoPlay muted loop {...props} onCanPlayThrough={canplaythrough}>
        { !hasWebmSupport && (
          <source src="/videos/Landing_SOULYX_TOKEN.mp4" type="video/mp4" />
        ) }
        { hasWebmSupport && (
          <source src="https://storage.cloud.google.com/suspendedsoul/Landing/SOULYX_TOKEN.webm" data-test={ isSafari } type="video/webm" />
        ) }
      </Wrapper>
    </WrapperOuter>
  )
}

const Wrapper = styled.video`
  width: 100%;
  max-height: ${({ theme }) => `calc(100vh - ${theme.sizes.header})`};
  min-width: 100%;
  min-height: 100%;
`

const WrapperOuter = styled.div`
  width: 100%;
`