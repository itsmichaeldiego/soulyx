import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { TOKEN_NAME } from '../dom/token';
import { Default, Mobile } from '../lib/mediaQueryHelper'

import { LinkButton } from './LinkButton';
import { AnimatedSmoke } from './AnimatedSmoke';

export function GetToken() {
  return (
    <Wrapper>
        <TitleWrapper data-scroll data-scroll-speed="1">
          <Image src="/images/get-soulx.svg" alt={`Get ${TOKEN_NAME}`} layout="fill" />
        </TitleWrapper>
        <ButtonWrapper data-scroll data-scroll-speed="1">
          <GetButton href="https://miso.sushi.com/" text={`Get ${TOKEN_NAME}`} target="_blank" />
        </ButtonWrapper>
        <SuspendedSoulWrapper data-scroll data-scroll-speed="1.5">
          <Image src="/images/suspended-soul.svg" alt="Suspended Soul" layout="fill" />
        </SuspendedSoulWrapper>
      <AnimatedSmoke />
      <BackgroundImage>
        <Default>
          <Image src="/images/space-man-suspended-soul.png" alt="Community faces" layout='fill' objectFit="cover" objectPosition="center center"/>
        </Default>
        <Mobile>
          <Image src="/images/space-man-suspended-soul.png" alt="Community faces" layout='fill' objectFit="cover" objectPosition="32% 0"/>
        </Mobile>
      </BackgroundImage>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 1820px;
  padding: ${({ theme }) => theme.spacing(20, 0)};
  margin-left: ${({ theme }) => theme.spacing(-9)};
  position: relative;
  overflow: hidden;

  @media ${({ theme }) => theme.media.mobile} {
    margin-left: ${({ theme }) => theme.spacing(-3)};
    margin-right: 0;
    height: 628px;
    padding: 48px 28px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    padding: ${({ theme }) => theme.spacing(10)};
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const TitleWrapper = styled.div`
  max-width: 100%;
  min-height: 200px;
  margin: 0 auto;
  // fix for content to go over the animated smoke
  position: relative;
  z-index: 5;

  @media ${({ theme }) => theme.media.mobile} {
    min-height: 96px;
    max-width: 329px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    min-height: 330px;
    margin-top: ${({ theme }) => theme.spacing(6)};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(105)};
  // fix for content to go over the animated smoke
  position: relative;
  z-index: 5;

  @media ${({ theme }) => theme.media.mobile} {
    margin-top: ${({ theme }) => theme.spacing(2.5)};
    margin-bottom: ${({ theme }) => theme.spacing(34)};
  }
`;

const GetButton = styled(LinkButton)`
  font-size: 22px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(2.5, 3)};

  @media ${({ theme }) => theme.media.mobile} {
    font-size: 16px;
    padding: ${({ theme }) => theme.spacing(2, 2.5)};
  }
`;

const SuspendedSoulWrapper = styled.div`
  // fix for content to go over the animated smoke
  position: relative;
  z-index: 5;
  min-height: 300px;
  margin-left: ${({ theme }) => theme.spacing(9)};
  margin-right: ${({ theme }) => theme.spacing(3)};

  @media ${({ theme }) => theme.media.mobile} {
    max-width: 340px;
    min-height: 96px;
    margin: 0 auto;
  }

  @media ${({ theme }) => theme.media.desktop} {
    min-height: 400px;
  }
`;