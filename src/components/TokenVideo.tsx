import React from 'react';
import styled from 'styled-components';

import useVideoLoaded from '../hooks/useVideoLoaded'

export function TokenVideo({ ...props }) {
/* @ts-ignore */
const { videoLoaded, setVideoLoaded } = useVideoLoaded()

  const canplaythrough = ()=>{
    !videoLoaded && setVideoLoaded(true)
  }

  return (
    <WrapperOuter  data-scroll data-scroll-speed="-4">
      <Wrapper autoPlay muted loop {...props} onCanPlayThrough={canplaythrough}>
        <source src="https://storage.cloud.google.com/suspendedsoul/Landing/SOULYX_TOKEN.webm" type="video/webm" />
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