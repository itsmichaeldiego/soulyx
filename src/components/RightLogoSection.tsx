import React from 'react';
import styled from 'styled-components';

import { TOKEN_NAME } from '../dom/token';

import { SectionTitle } from './SectionTitle';

type IRightLogoSectionProps = {
  titleUrl: string;
}

// TODO: Overlap mobile padding with background image (!)
export function RightLogoSection({ titleUrl }: IRightLogoSectionProps) {
  return (
    <Wrapper>
      <SectionTitle imageUrl={`/images/${titleUrl}.svg`} alt={`${TOKEN_NAME} Logo`} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  height: ${({ theme }) => `calc(100vh - ${theme.sizes.header})`};

  @media ${({ theme }) => theme.media.mobile} {
    background-image: url('/images/logo.png');
    background-repeat: no-repeat;
    background-position: right -38px top 0;
    background-size: 35%;
    height: 168px;
  }
`;
