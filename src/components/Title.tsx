import React from 'react';
import styled from 'styled-components';


export function Title({children}: React.PropsWithChildren<{}>): JSX.Element {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.h2`
  font-family: ${({ theme })=> theme.font.secondary};
  font-style: normal;
  font-weight: normal;
  font-size: 180px;
  line-height: 180px;
  margin: 0;
`