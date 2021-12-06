import { Intro } from '../components/sections/Intro'
import { Community } from '../components/sections/Community'
import { Decentralization } from '../components/sections/Decentralization'
import { Genesis } from '../components/sections/Genesis'
import { Roadmap } from '../components/sections/Roadmap'
import { About } from '../components/sections/About'
import { Thanks } from '../components/sections/Thanks'
import { FAQ } from '../components/sections/FAQ'


export  interface INavItem {
  name: string;
  displayName: string;
  headerName: string;
  headerDescription: string;
  component: any;
  offset?: number;
  hideHeader?: boolean;
}

export const NAV_ITEMS: INavItem[] = [
  {
    name: 'intro',
    displayName: 'Intro',
    headerName: 'Intro',
    headerDescription: 'Intro',
    offset: -96,
    component: Intro,
    hideHeader: true,
  },
  {
    name: 'decentralization',
    displayName: 'Decentralization',
    headerName: 'SOULYX NEW TOKEN',
    headerDescription: 'THRESHOLD OF DESCENTRALIZATION',
    component: Decentralization,
  },
  {
    name: 'community',
    displayName: 'Community',
    headerName: 'OUR MISSION"',
    headerDescription: 'Power in the hands of the community',
    component: Community,
  },
  {
    name: 'genesis',
    displayName: 'Genesis',
    headerName: 'SOULYX GENESIS DISTRIBUTION',
    headerDescription: 'SUPPLY & DAO',
    component: Genesis,
  },
  {
    name: 'roadmap',
    displayName: 'Roadmap',
    headerName: 'OUR NEXT STEPS',
    headerDescription: 'SUSPENDED SOUL´S ROADMAP',
    component: Roadmap,
  },
  {
    name: 'about',
    displayName: 'About',
    headerName: 'ABOUT US',
    headerDescription: 'SUSPENDED SOUL',
    component: About,
  },
  {
    name: 'faq',
    displayName: 'FAQ',
    headerName: 'FREQUENTLY ASKED QUESTIONS',
    headerDescription: 'ABOUT SOULYX',
    component: FAQ,
  },
  {
    name: 'thanks',
    displayName: 'Thanks',
    headerName: 'YOU HAVE WITNESSED OUR SOUL EXPOSED.',
    headerDescription: 'THANKS',
    component: Thanks,
  }
]