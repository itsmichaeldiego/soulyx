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
import { LaunchDetails } from '../sections/LaunchDetails'
import { TOKEN_NAME } from '../dom/token'


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
    headerName: 'INTRO',
    headerDescription: 'INTRO',
    component: Intro,
    hideHeader: true,
  },
  {
    name: 'decentralization',
    displayName: 'DECENTRALIZATION',
    headerName: `${TOKEN_NAME}: THE KEY TO SUSPENDED SOUL`,
    headerDescription: 'WE ARE STANDING IN THE THRESHOLD OF DESCENTRALIZATION',
    component: Decentralization,
  },
  {
    name: 'community',
    displayName: 'COMMUNITY',
    headerName: 'OUR MISSION',
    headerDescription: 'POWER IN THE HANDS OF THE COMMUNITY',
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
    headerName: `${TOKEN_NAME} GENESIS DISTRIBUTION`,
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
    name: 'launch',
    displayName: 'LAUNCH',
    headerName: `TOKEN'S LAUNCH DETAILS`,
    headerDescription: 'ALL YOU NEED TO KNOW',
    component: LaunchDetails,
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
    headerDescription: `ABOUT ${TOKEN_NAME}`,
    component: FAQ,
  },
  {
    name: 'lastNews',
    displayName: 'LAST NEWS',
    headerName: 'LATEST NEWS',
    headerDescription: `ABOUT ${TOKEN_NAME}`,
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