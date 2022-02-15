import React from 'react';
import styled from 'styled-components';

export function TokenVideo({ ...props }) {
  return (
    <Wrapper autoPlay muted loop {...props}>
      <source src="https://storage.cloud.google.com/suspendedsoul/Landing/SOULYX_TOKEN.webm" type="video/webm" />
    </Wrapper>
  )
}

const Wrapper = styled.video`
  width: 100%;
  max-height: ${({ theme }) => `calc(100vh - ${theme.sizes.header})`};
  min-width: 100%;
  min-height: 100%;
`