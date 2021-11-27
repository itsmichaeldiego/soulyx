import React from 'react'

import { Banner } from './Banner'
import { TextSection } from './TextSection'
import { TokenizeRoadmap } from './TokenizeRoadmap/TokenizeRoadmapDesktop'

export function HomePage() {
  return (
    <>
      <Banner />
      <TextSection 
        title="$SOULYx supply unlock." 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip" 
      />
      <TokenizeRoadmap />
      <TextSection 
        title="Lorem ipsum dolor sit" 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip" 
      />
    </>
  )
}

