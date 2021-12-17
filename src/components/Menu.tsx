import React, { useCallback, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { animateScroll as scroll } from 'react-scroll'

import { NAV_ITEMS } from '../lib/navigation';
import { getPad } from '../lib/utils';
import { Icon } from './Icon';

import { SectionHeader } from './SectionHeader';

type IMenuProps = {
  onClose: () => void;
}

export function Menu({ onClose }: IMenuProps) {
  const theme = useContext(ThemeContext);
  
  const handleNav = useCallback((name) => {
    scroll.scrollTo(name, {
      duration: 1500,
      delay: 100,
    })
    onClose();
  }, [onClose]);

  return (
    <Wrapper>
      <Header>
        <div onClick={onClose} role="button">
          <Icon icon="arrow-left" size={26} color={theme.text.tertiary} />
        </div>
        <Title>
          Suspended Soul
        </Title>
      </Header>
      {NAV_ITEMS.map((item, index) => (
        <CustomSectionHeader
          key={item.name}
          number={`${getPad(index)} - ${getPad(NAV_ITEMS.length - 1)}`}
          name={item.headerName}
          description={item.headerDescription}
          hideStar
          onClick={() => handleNav(item.name)}
        />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  overflow: auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('/images/glass-hand.png');
`

const Header = styled.header`
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.sizes.header};
  padding: ${({ theme }) => theme.spacing(4, 3)};
  color: ${({ theme }) => theme.text.tertiary};
  background-color: ${({ theme }) => theme.bg.secondary};
`

const Title = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-weight: normal;
  margin-left: ${({ theme }) => theme.spacing(3)};
`

const CustomSectionHeader = styled(SectionHeader)`
  margin: 0;
  color: ${({ theme }) => theme.text.tertiary};
  padding: ${({ theme }) => theme.spacing(5, 10)};
  background-color: ${({ theme }) => theme.bg.secondary};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.text.primary};
    background: transparent;
  }
`