import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Link } from 'react-scroll'

import { Icon } from './Icon';

export function DiscoverSection({ text }: { text: string }) {
  const theme = useContext(ThemeContext);
  return (
    <Wrapper>
      <Item>
        <CustomLink 
          to="decentralization" 
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={0}
        >
          <Icon icon="arrow-down" color={theme.cta.primary} size={26} />
          <Text>{text}</Text>
        </CustomLink>
      </Item>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: flex-end;
  min-height: 50vh;
  height: 100%;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(4)}; 
  flex: 0 0 50%;

  @media (max-width: 767px) {
    flex: 1 1 100%;
    justify-content: center;
  }
`


const CustomLink = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const Text = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  margin-left: ${({ theme }) => theme.spacing(2)};
  max-width: 210px;
`