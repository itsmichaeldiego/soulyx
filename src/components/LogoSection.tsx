import React from 'react';
  import styled from 'styled-components'

export function LogoSection({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  height: ${({ theme }) => `calc(100vh - ${theme.sizes.header})`};
  background-image: url('/images/logo.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 35%;
`
