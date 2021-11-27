import React from 'react'

import { Banner } from './Banner'
import { Thanks } from './Thanks'
import { Genesis } from './Genesis'
import { TextSection } from './TextSection'
import { TokenizeRoadmap } from './TokenizeRoadmap'

export function HomePage() {
  return (
    <>
      <Banner />
      <TextSection 
        title="Power in the hands of our community." 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip" 
      />
      <TextSection 
        title="A universe of possibilities." 
        text="$SOULYx opens a door to the future and provides options for the economic destiny of investors and holders. A whole system of virtual economy of the Suspended Soul ecosystem, with multiple diversification alternatives:" 
      />
      <Genesis />
      <TextSection 
        title="$SOULYx supply unlock." 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip" 
      />
      <TokenizeRoadmap />
      <TextSection 
        title="Lorem ipsum dolor sit" 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip" 
      />
    < TextSection 
        title="Lorem ipsum dolor sit" 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip" 
      />
      <Thanks />
    </>
  )
}

