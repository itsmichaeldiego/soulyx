import React from 'react';
import styled from 'styled-components';

import { LinkButton } from './LinkButton';

export function Header(): JSX.Element {
  return (
    <Wrapper>
      <span>
        Suspended Soul
      </span>
      <Actions>
        <TraductionItems>
          <span>EN</span>
          <span>|</span>
          <span>ES</span>
        </TraductionItems>
        <LinkButton href="https://miso.sushi.com/" text="Get Soulyx" target="_blank" />
      </Actions>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  // TODO: use units
  padding: 42px;
`

const Actions = styled.div`
  display: flex;
  align-items: center;
`

const TraductionItems = styled.div`
  display: flex;
  align-items: center;
  margin-right: 18px;
  > * {
    margin: 0 3px;
  }
`