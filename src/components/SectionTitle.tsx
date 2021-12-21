import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

type ISectionTitleProps = {
  imageUrl: string;
  alt: string;
  style?: React.CSSProperties;
}


export function SectionTitle({ imageUrl, alt }: ISectionTitleProps) {
  return (
    <Wrapper>
      <Image src={imageUrl} alt={alt} layout="fill" objectFit="contain" objectPosition="top left" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: ${({ theme }) => `calc(100vh - ${theme.sizes.header})`};
  height: 100%;
  position: relative;
  z-index: 1;

  @media (max-width: 767px) {
    min-height: 280px;
  }
`;