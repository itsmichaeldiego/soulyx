import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Footer } from '../components/Footer';

export function Thanks() {
  return (
    <SectionWrapper>
      <LogoWrapper>
        <Image src="/images/thanks.svg" alt="SoulX Thannks" layout="fill" />
      </LogoWrapper>
      <Text>THANK YOU FOR COMING THIS FAR DOWN THE ROAD WITH US. HOPE YOUR DESIRE TO GROW TOGETHER MATCHES OURS, AND WE CAN WRITE THE NEXT CHAPTER TOGETHER.</Text>
      <Footer />
    </SectionWrapper>
  );
}

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoWrapper = styled.div`
  min-height: 100vw;
  position: relative;
  background-image: url('/images/logo.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 60%;
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  @media ${({ theme }) => theme.media.mobile} {
    min-height: 254px;
    background-size: contain;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(8, 6)};
  font-weight: 300;
  font-size: 12px;
  max-width: 340px;

  @media ${({ theme }) => theme.media.mobile} {
    padding: ${({ theme }) => theme.spacing(6, 0)};
    max-width: 200px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    margin: ${({ theme }) => theme.spacing(8, 28)};
  }
`;