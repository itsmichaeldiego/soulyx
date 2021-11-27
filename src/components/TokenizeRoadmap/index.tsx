import React from 'react'
import { TokenizeRoadmap as TokenizeRoadmapMobile } from './TokenizeRoadmapMobile'
import { TokenizeRoadmap as TokenizeRoadmapDesktop } from './TokenizeRoadmapDesktop'

import { Default, Mobile } from '../../lib/mediaQueryHelper'

export function TokenizeRoadmap() {
  return (
    <>
      <Default>
        <TokenizeRoadmapDesktop />
      </Default>
      <Mobile>
        <TokenizeRoadmapMobile />
      </Mobile>
    </>
  )
}