import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

type ISectionTitleProps = {
  imageUrl: string;
  alt: string;
}


export function SectionTitle({ imageUrl, alt }: ISectionTitleProps) {
  return (
    <Wrapper>
      <Image src={imageUrl} alt={alt} layout="fill" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 460px;
  height: 100%;
  max-width: 1228px;
  position: relative;

  @media (max-width: 767px) {
    min-height: 168px;
    max-width: 340px;
  }
`;