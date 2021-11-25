import React from 'react';

import styled from 'styled-components';

export function Header(): JSX.Element {
  return (
    <Wrapper>
      <span>
        Suspended Soul
      </span>
      <div>
        <span>EN</span>
        <span>|</span>
        <span>ES</span>
        <a href="">Get Soulyx</a>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 40px;
`