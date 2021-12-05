import React from 'react'
import { Element } from 'react-scroll'

import { NAV_ITEMS } from './Nav'
import { Intro } from './Intro'
import { Thanks } from './Thanks'
import { Genesis } from './Genesis'
import { Community } from './Community'
import { GetSoulyx } from './GetSoulyx'
import { TextSection } from './TextSection'
import { TokenizeRoadmap } from './TokenizeRoadmap'
import { Decentralization } from './Decentralization'
import { FaqSection } from './FaqSection/FaqSection'
import { RoadmapChart } from './RoadmapChart/RoadmapChart'
import { RoadmapSection } from './RoadmapSection/RoadmapSection'
import { LaunchDetailsSection } from './LaunchDetails/LaunchDetailsSection'

export function HomePage() {
  return (
    <>
      <Element name={NAV_ITEMS[0].name}>
        <Intro />
      </Element>
      <Element name={NAV_ITEMS[1].name}>
        <Decentralization />
      </Element>
      <Element name={NAV_ITEMS[2].name}>
        <Community />
      </Element>
      <Element name={NAV_ITEMS[3].name}>
        <Genesis />
        <TextSection
          title="$SOULYX SUPPLY UNLOCK."
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
        />
        <TokenizeRoadmap />
        <TextSection
          title="LOREM IPSUM DOLOR SIT."
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
        />
        <RoadmapChart />
        <TextSection
          title="LOREM IPSUM DOLOR SIT."
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
        />
      </Element>
      <Element name={NAV_ITEMS[4].name}>
        <RoadmapSection />
        <LaunchDetailsSection />
      </Element>
      <Element name={NAV_ITEMS[5].name}>
        <GetSoulyx />
        <TextSection
          title="LOREM IPSUM DOLOR SIT."
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
        />
        <FaqSection />
      </Element>
      <Element name={NAV_ITEMS[6].name}>
        <Thanks />
      </Element>
    </>
  )
}

