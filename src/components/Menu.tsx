import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Link } from 'react-scroll'

import { NAV_ITEMS } from '../lib/navigation';
import { getPad } from '../lib/utils';
import { useMobileMediaQuery } from '../lib/mediaQueryHelper';

import { Icon } from './Icon';
import { SectionHeader } from './SectionHeader';

type IMenuProps = {
  onClose: () => void;
}

export function Menu({ onClose }: IMenuProps) {
  const theme = useContext(ThemeContext);
  const isMobile = useMobileMediaQuery();

  return (
    <Wrapper>
      <Header>
        <div onClick={onClose} role="button" style={{ cursor: 'pointer' }}>
          <Icon icon="arrow-left" size={26} color={theme.text.tertiary} />
        </div>
        <Title>
          Suspended Soul
        </Title>
      </Header>
      {NAV_ITEMS.map((item, index) => {
        const offset = item.offset || 0;
        return (
          <Link
            key={item.name}
            activeClass="active"
            to={item.name}
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={isMobile ? -100 : offset}
            onClick={onClose}
          >
            <CustomSectionHeader
              key={item.name}
              number={`${getPad(index)} - ${getPad(NAV_ITEMS.length - 1)}`}
              name={item.headerName}
              description={item.headerDescription}
              hideStar
            />
          </Link>
  
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  z-index: 99999;
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
  @media (max-width: 767px) {
    padding: ${({ theme }) => theme.spacing(4)};
  }
`