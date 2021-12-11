import React, { useLayoutEffect, useState } from 'react';

import { Default, Mobile } from '../../lib/mediaQueryHelper';

import { Virtual as VirtualMobile } from './VirtualMobile';
import { Virtual as VirtualDesktop } from './VirtualDesktop';

export function Virtual() {
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
        <VirtualDesktop />
      </Default>
      <Mobile>
        <VirtualMobile />
      </Mobile>
    </>
  );
}