import React from 'react';
import Image from 'next/image'
import styled from 'styled-components'

export function Banner() {
  return (
    <Wrapper>
      <Image src="/images/banner.svg" alt="SoulX Banner" layout="fill" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  height: ${({ theme }) => `calc(100vh - ${theme.sizes.header})`};
  background: url('/images/logo.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 35%;
`
