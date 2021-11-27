import React from 'react'
import { TokenizeRoadmap as TokenizeRoadmapMobile } from './TokenizeRoadmapMobile'
import { TokenizeRoadmap as TokenizeRoadmapDesktop } from './TokenizeRoadmapDesktop'

import { Desktop, Mobile } from '../../lib/mediaQueryHelper'

export function TokenizeRoadmap() {
  return (
    <>
      <Desktop>
        <TokenizeRoadmapDesktop />
      </Desktop>
      <Mobile>
        <TokenizeRoadmapMobile />
      </Mobile>
    </>
  )
}