import React from 'react'
import { Element } from 'react-scroll'

import { NAV_ITEMS } from './Nav'
import { Intro } from './Intro'
import { Thanks } from './Thanks'
import { Genesis } from './Genesis'
import { TextSection } from './TextSection'
import { TokenizeRoadmap } from './TokenizeRoadmap'
import { Decentralization } from './Decentralization'
import { RoadmapChart } from './RoadmapChart/RoadmapChart'
import { RoadmapSection } from './RoadmapSection/RoadmapSection'
import { FaqSection } from './FaqSection/FaqSection'
import { LaunchDetailsSection } from './LaunchDetails/LaunchDetailsSection'
import { GetSoulyx } from './GetSoulyx'

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
        <TextSection
          title="POWER IN THE HANDS OF OUR COMMUNITY."
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
        />
        <TextSection
          title="A UNIVERSE OF POSSIBILITIES."
          text="$SOULYx opens a door to the future and provides options for the economic destiny of investors and holders. A whole system of virtual economy of the Suspended Soul ecosystem, with multiple diversification alternatives:"
        />
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

