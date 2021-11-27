import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from 'styled-components';

import { Icon } from './Icon';

export function Nav(): JSX.Element {
  const theme = useContext(ThemeContext);

  return (
    <Wrapper>
      <div>
        X
      </div>
      <Indicators>
        <span>LOREM</span>
        <Separator />
        <span>INTRO</span>
      </Indicators>
      <GoTopButton>
        <Icon icon="chevrons-up" color={theme.cta.primary} />
        <GoTopText>ON TOP</GoTopText>
      </GoTopButton>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: fixed;
  left: 0;
  width: ${({ theme }) => theme.sizes.nav};
  height: 100vh;
  padding: ${({ theme }) => theme.spacing(2)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  line-height: 12px;
`

const Indicators = styled.div`
  display: flex;
  align-items: center;
  transform: rotate(-90deg);
`

const Separator = styled.div`
  margin: ${({ theme }) => theme.spacing(2)};
  width: ${({ theme }) => theme.spacing(4)};
  height: 1px;
  background: ${({ theme }) => theme.bg.secondary};
`

const GoTopButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const GoTopText = styled.div`
  padding-top: ${({ theme }) => theme.spacing(0.5)};
  white-space: nowrap;
`