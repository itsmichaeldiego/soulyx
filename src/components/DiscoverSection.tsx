import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { Icon } from './Icon';

export function DiscoverSection({ text }: {text: string}) {
  const theme = useContext(ThemeContext);
  return (
    <Wrapper>
      <Item />
      <Item>
        <Icon icon="arrow-down" color={theme.cta.primary} size={26} />
        <Text>{text}</Text>
      </Item>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  min-height: 50vh;
  height: 100%;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 100%;
  padding: ${({ theme }) => theme.spacing(12)};
`

const Text = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  margin-left: ${({ theme }) => theme.spacing(2)};
  max-width: 210px;
`