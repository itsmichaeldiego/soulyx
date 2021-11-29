import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

type IRightLogoSectionProps = {
  titleUrl: string;
}

// TODO: Overlap mobile padding with background image (!) - fix text size (consume different asset for mobile?)
export function RightLogoSection({ titleUrl }: IRightLogoSectionProps) {
  return (
    <Wrapper>
      <Image src={`/images/${titleUrl}.svg`} alt="SoulX Banner" layout="fill" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  height: ${({ theme }) => `calc(100vh - ${theme.sizes.header})`};

  @media (max-width: 767px) {
    background-image: url('/images/logo.png');
    background-repeat: no-repeat;
    background-position: right -38px top 0px;
    background-size: 35%;
    height: 168px;
  }
`;
