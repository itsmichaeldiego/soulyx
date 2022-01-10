import React from 'react';
import styled from 'styled-components';

import { Footer } from '../components/Footer';
import { LogoSection } from '../components/LogoSection';

export function Thanks() {
  return (
    <SectionWrapper>
      <LogoSection src="/images/thanks.svg" alt="SoulX Thannks" layout="fill" />
      <Text>THANK YOU FOR COMING THIS FAR DOWN THE ROAD WITH US. HOPE YOUR DESIRE TO GROW TOGETHER MATCHES OURS, AND WE CAN WRITE THE NEXT CHAPTER TOGETHER.</Text>
      <Footer />
    </SectionWrapper>
  );
}

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
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