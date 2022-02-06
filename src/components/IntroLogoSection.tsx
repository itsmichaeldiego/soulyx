import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { TOKEN_NAME } from '../dom/token';

export function IntroLogoSection() {
  return (
    <Wrapper>
      <Video autoPlay muted loop>
        <source src="https://storage.cloud.google.com/suspendedsoul/Landing/SOULYX_TOKEN.webm" type="video/webm" />
      </Video>
      <Image src="/images/soulx.svg" alt={`${TOKEN_NAME} Banner`} layout="fill" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`;

const Video = styled.video`
  width: 100%;
  max-height: ${({ theme }) => `calc(100vh - ${theme.sizes.header})`}; 
  min-width: 100%; 
  min-height: 100%;
`