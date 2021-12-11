import { Intro } from '../sections/Intro'
import { Community } from '../sections/Community'
import { Decentralization } from '../sections/Decentralization'
import { Genesis } from '../sections/Genesis'
import { Roadmap } from '../sections/Roadmap'
import { About } from '../sections/About'
import { Thanks } from '../sections/Thanks'
import { FAQ } from '../sections/FAQ'
import { Virtual } from '../sections/Virtual'
import { LastNews } from '../sections/LastNews'
import { Team } from '../sections/Team'


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
    displayName: 'INTRO',
    headerName: 'Intro',
    headerDescription: 'Intro',
    offset: -96,
    component: Intro,
    hideHeader: true,
  },
  {
    name: 'decentralization',
    displayName: 'DECENTRALIZATION',
    headerName: 'SOULx NEW TOKEN',
    headerDescription: 'THRESHOLD OF DESCENTRALIZATION',
    component: Decentralization,
  },
  {
    name: 'community',
    displayName: 'COMMUNITY',
    headerName: 'OUR MISSION',
    headerDescription: 'Power in the hands of the community',
    component: Community,
  },
  {
    name: 'virtual',
    displayName: 'VIRTUAL',
    headerName: 'TOKEN VIRTUAL ECONOMY',
    headerDescription: 'A UNIVERSE OF POSSIBILITIES',
    component: Virtual,
  },
  {
    name: 'genesis',
    displayName: 'GENESIS',
    headerName: 'SOULx GENESIS DISTRIBUTION',
    headerDescription: 'SUPPLY & DAO',
    component: Genesis,
  },
  {
    name: 'roadmap',
    displayName: 'ROADMAP',
    headerName: 'OUR NEXT STEPS',
    headerDescription: 'SUSPENDED SOUL´S ROADMAP',
    component: Roadmap,
  },
  {
    name: 'about',
    displayName: 'ABOUT',
    headerName: 'ABOUT US',
    headerDescription: 'SUSPENDED SOUL',
    component: About,
  },
  {
    name: 'team',
    displayName: 'TEAM',
    headerName: 'KNOW THE TEAM',
    headerDescription: 'SUSPENDED SOUL',
    component: Team,
  },
  {
    name: 'faq',
    displayName: 'FAQ',
    headerName: 'FREQUENTLY ASKED QUESTIONS',
    headerDescription: 'ABOUT SOULx',
    component: FAQ,
  },
  {
    name: 'lastNews',
    displayName: 'LAST NEWS',
    headerName: 'LATEST NEWS',
    headerDescription: 'ABOUT SOULx',
    component: LastNews,
  },
  {
    name: 'thanks',
    displayName: 'THANKS',
    headerName: 'YOU HAVE WITNESSED OUR SOUL EXPOSED.',
    headerDescription: 'THANKS',
    component: Thanks,
  }
]