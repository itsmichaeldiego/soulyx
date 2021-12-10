import React, { useLayoutEffect, useState } from 'react';

import { Default, Mobile } from '../../lib/mediaQueryHelper';

import { About as AboutMobile } from './AboutMobile';
import { About as AboutDesktop } from './AboutDesktop';

export function About() {
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
        <AboutDesktop />
      </Default>
      <Mobile>
        <AboutMobile />
      </Mobile>
    </>
  );
}