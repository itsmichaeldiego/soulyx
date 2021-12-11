import React, { useState, useLayoutEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { useMobileMediaQuery } from '../lib/mediaQueryHelper';

export function Diagram() {
  const [mounted, setMounted] = useState(false);
  const isMobile = useMobileMediaQuery();

  useLayoutEffect(() => {
    // This is to avoid SSR + useMedia issues
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ImageWrapper>
      <Image src={`${isMobile ? '/images/diagram-mobile.svg' : '/images/diagram.svg'}`} alt="Roadmap Diagram" layout="fill" />
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  height: 414px;
  padding: ${({ theme }) => theme.spacing(8, 0)};
  position: relative;

  @media (max-width: 767px) {
    // TODO: Review this once we remove side paddings
    height: 394px;
    width: 302px;
    padding: ${({ theme }) => theme.spacing(28, 0)};
  }
`;
