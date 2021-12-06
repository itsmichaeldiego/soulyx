import React, { useLayoutEffect, useState } from 'react'

import { Default, Mobile } from '../../lib/mediaQueryHelper'

import { TokenizeRoadmap as TokenizeRoadmapMobile } from './TokenizeRoadmapMobile'
import { TokenizeRoadmap as TokenizeRoadmapDesktop } from './TokenizeRoadmapDesktop'

export function TokenizeRoadmap() {
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    // This is to avoid SSR + useMedia issues
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Default>
        <TokenizeRoadmapDesktop />
      </Default>
      <Mobile>
        <TokenizeRoadmapMobile />
      </Mobile>
    </>
  );
}