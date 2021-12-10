import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { LinkButton } from './LinkButton';

export function GetSoulyx() {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src="/images/get-soulyx.svg" alt="Get Soulyx" layout="fill" />
      </ImageWrapper>
        <ButtonWrapper>
          <GetButton href="https://miso.sushi.com/" text="Get Soulyx" target="_blank" />
        </ButtonWrapper>
        <SuspendedSoulWrapper>
          <Image src="/images/suspended-soul.svg" alt="Suspended Soul" layout="fill" />
        </SuspendedSoulWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-image: url('/images/space-man-suspended-soul.png');
  background-position: 0% 0%;
  background-repeat: no-repeat;
  background-size: 100%;
  height: 1816px;
  padding: ${({ theme }) => theme.spacing(20, 0)};
  position: relative;
  margin-right: -24px;

  @media (max-width: 767px) {
    // TODO: Review this once we remove side paddings
    margin-left: -24px;
    background-position: 32% 0%;
    background-size: cover;
    height: 624px;
    padding: 48px 28px;
  }
`;

const ImageWrapper = styled.div`
  max-width: 100%;
  min-height: 200px;
  position: relative;

  @media (max-width: 767px) {
    min-height: 96px;
    max-width: 329px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing(5)};
  margin-bottom: ${({ theme }) => theme.spacing(65)};

  @media (max-width: 767px) {
    margin-top: ${({ theme }) => theme.spacing(2.5)};
    margin-bottom: ${({ theme }) => theme.spacing(34)};
  }
`;

const GetButton = styled(LinkButton)`
  font-size: 22px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(2.5, 3)};

  @media (max-width: 767px) {
    font-size: 16px;
    padding: ${({ theme }) => theme.spacing(2, 2.5)};
  }
`;

const SuspendedSoulWrapper = styled.div`
  margin-left: ${({ theme }) => theme.spacing(5)};
  margin-top: ${({ theme }) => theme.spacing(15)};
  max-width: 1420px;
  min-height: 300px;
  position: relative;

  @media (max-width: 767px) {
    max-width: 340px;
    min-height: 96px;
    margin: 0;
    margin-top: -18px;
  }
`;
