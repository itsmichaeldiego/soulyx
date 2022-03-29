import React, { useContext } from 'react';
import Image from 'next/image';
import styled, { ThemeContext } from 'styled-components';
import { SmoothScrollContext } from './SmoothScrollProvider';

import { NAV_ITEMS } from '../lib/navigation';
import { getPad } from '../lib/utils';
import { useMobileMediaQuery } from '../lib/mediaQueryHelper';

import { Icon } from './Icon';
import { SectionHeader } from './SectionHeader';

type IMenuProps = {
  onClose: () => void;
  className: any;
}

export function Menu({ onClose, className }: IMenuProps) {
  const { scroll } = useContext(SmoothScrollContext)
  const theme = useContext(ThemeContext);
  const isMobile = useMobileMediaQuery();

  const goToSection = (name:string): void => {
    /* @ts-ignore */
    scroll && scroll.scrollTo(
      `[data-section-id=${name}]`,
      { 
        duration: 1,
        disableLerp: true,
        offset: isMobile ? -96 : 0,
      }
    )
  }

  return (
    <Wrapper className={className} data-scroll data-scroll-sticky data-scroll-target="#smooth-scroll">
      <Header>
        <IconWrapper onClick={onClose} role="button" style={{ cursor: 'pointer' }} aria-label="Back">
          <Icon icon="arrow-left" size={26} color={theme.text.tertiary} />
        </IconWrapper>
        <Title>
          Suspended Soul
        </Title>
      </Header>
      {NAV_ITEMS.map((item, index) => {
        return (
          <span
            key={item.name}
            onClick={()=>{
              onClose()
              goToSection(item.name)
            }}
          >
            <CustomSectionHeader
              key={item.name}
              number={`${getPad(index)} - ${getPad(NAV_ITEMS.length - 1)}`}
              name={item.headerName}
              description={item.headerDescription}
              hideStar
            />
          </span>
        )
      })}
      <BackgroundImage>
        <Image src="/images/glass-hand.png" alt="" layout='fill' objectFit="cover" objectPosition="center"/>
      </BackgroundImage>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 0vh;
  max-width: 100vw;
  max-height: 100vh;
  overflow: auto;
  background-color: ${({ theme }) => theme.bg.primary};
  transition: height .75s cubic-bezier(.75,0,0,.75);
  &.opened {
    height: 100vh;
  }
`
const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`

const Header = styled.header`
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.sizes.header};
  padding: ${({ theme }) => theme.spacing(4, 3)};
  padding-left: 17px;
  color: ${({ theme }) => theme.text.tertiary};
  background-color: ${({ theme }) => theme.bg.secondary};
  @media ${({ theme }) => theme.media.mobile} {
    padding: ${({ theme }) => theme.spacing(4, 2)};
    height: ${({ theme }) => theme.sizes.headerMobile};
  }
`

const Title = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-weight: normal;
  margin-left: ${({ theme }) => theme.spacing(3)};
  @media ${({ theme }) => theme.media.mobile} {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-left: 0;
  }
`

const CustomSectionHeader = styled(SectionHeader)`
  margin: 0 !important;
  color: ${({ theme }) => theme.text.tertiary};
  padding: ${({ theme }) => theme.spacing(5, 10)} !important;
  background-color: ${({ theme }) => theme.bg.secondary};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.text.primary};
    background: transparent;
  }
  @media ${({ theme }) => theme.media.mobile} {
    padding: ${({ theme }) => theme.spacing(4)} !important;
  }
`

const IconWrapper = styled.div`
  border: 1px solid transparent;
  border-radius: 50%;
  padding: 0.35rem;
  &:hover,
  &:focus {
    border: 1px solid ${({ theme }) => theme.text.tertiary};
  }
`