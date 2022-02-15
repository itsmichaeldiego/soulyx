import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { TOKEN_NAME } from '../dom/token';

import { TokenVideo } from './TokenVideo';

export function IntroLogoSection() {
  return (
    <Wrapper>
      <TokenVideo />
      <Image src="/images/banner.svg" alt={`${TOKEN_NAME} Banner`} layout="fill" priority />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  margin: 0 ${({ theme }) => theme.spacing(15)};
`;