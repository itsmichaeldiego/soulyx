import React from 'react';
import styled from 'styled-components';

import { TOKEN_NAME } from '../dom/token';

import { Footer } from '../components/Footer';
import { LogoSection } from '../components/LogoSection';

export function Thanks() {
  return (
    <SectionWrapper>
      <LogoSection src="/images/thanks.svg" alt={`${TOKEN_NAME} Thanks`} layout="fill" />
      <Text>THANK YOU FOR COMING THIS FAR DOWN THE ROAD WITH US. HOPE YOUR DESIRE TO GROW TOGETHER MATCHES OURS, SO WE CAN WRITE THE NEXT CHAPTER WITH YOU.</Text>
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
  font-weight: 400;
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