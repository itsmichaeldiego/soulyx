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
          <span>En</span>
          <span>|</span>
          <span>Es</span>
        </TraductionItems>
        <LinkButton href="https://miso.sushi.com/" text="Get Soulyx" target="_blank" />
      </Actions>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(7)};

`

const Actions = styled.div`
  display: flex;
  align-items: center;
`

const TraductionItems = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${({ theme }) => theme.spacing(3)};
  > * {
    margin: 0 ${({ theme }) => theme.spacing(0.5)};
  }
`