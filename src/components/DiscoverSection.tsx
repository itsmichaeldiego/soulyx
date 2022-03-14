import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { SmoothScrollContext } from './SmoothScrollProvider';

import { Icon } from './Icon';
import { NAV_ITEMS } from '../lib/navigation';
import { useMobileMediaQuery } from '../lib/mediaQueryHelper';

export function DiscoverSection({ text }: { text: string }) {
  const { scroll } = useContext(SmoothScrollContext)
  const theme = useContext(ThemeContext);
  const isMobile = useMobileMediaQuery();

  /* @ts-ignore */
  const goToSection = event => {
    event.preventDefault()
    /* @ts-ignore */
    scroll && scroll.scrollTo(
      `[data-section-id=${NAV_ITEMS[1].name}]`,
      { offset: isMobile ? -96 : 0 }
    )
  }

  return (
    <Wrapper data-scroll data-scroll-speed="4">
      <Item>
        <CustomLink
          onClick={goToSection}
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


const CustomLink = styled.span`
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