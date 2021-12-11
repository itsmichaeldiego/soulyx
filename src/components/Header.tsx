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
        {/* <TraductionItems>
          <span>En</span>
          <span>|</span>
          <span>Es</span>
        </TraductionItems> */}
        <LinkButton href="https://miso.sushi.com/" text="Get SOULx" target="_blank" />
      </Actions>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.sizes.header};
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`

const Actions = styled.div`
  display: flex;
  align-items: center;
`

// const TraductionItems = styled.div`
//   display: flex;
//   align-items: center;
//   margin-right: ${({ theme }) => theme.spacing(2.5)};
//   > * {
//     margin: 0 ${({ theme }) => theme.spacing(0.5)};
//   }
// `