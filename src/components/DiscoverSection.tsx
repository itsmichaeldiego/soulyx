import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Link } from 'react-scroll';

import { Icon } from './Icon';
import { NAV_ITEMS } from '../lib/navigation';
import { useMobileMediaQuery } from '../lib/mediaQueryHelper';

export function DiscoverSection({ text }: { text: string }) {
  const theme = useContext(ThemeContext);
  const isMobile = useMobileMediaQuery();

  return (
    <Wrapper>
      <Item>
        <CustomLink 
          to={NAV_ITEMS[1].name} 
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={isMobile ? -96 : 0}
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
  min-height: 40vh;

  @media ${({ theme }) => theme.media.mobile} {
    min-height: 18vh;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(4)}; 
  flex: 1 1 50%;

  @media ${({ theme }) => theme.media.mobile} {
    flex: 1 1 100%;
    justify-content: center;
  }
`;


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

  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`