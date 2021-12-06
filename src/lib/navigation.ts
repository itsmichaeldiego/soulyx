import { Intro } from '../components/sections/Intro'
import { Community } from '../components/sections/Community'
import { Decentralization } from '../components/sections/Decentralization'
import { Genesis } from '../components/sections/Genesis'
import { Roadmap } from '../components/sections/Roadmap'
import { About } from '../components/sections/About'
import { Thanks } from '../components/sections/Thanks'


export  interface INavItem {
  name: string;
  displayName: string;
  navTitle: string;
  navSubtitle: string;
  offset?: number;
  component: any;
}

export const NAV_ITEMS: INavItem[] = [
  {
    name: 'intro',
    displayName: 'Intro',
    navTitle: '',
    navSubtitle: '',
    offset: -96,
    component: Intro,
  },
  {
    name: 'decentralization',
    displayName: 'Decentralization',
    navTitle: '',
    navSubtitle: '',
    component: Decentralization,
  },
  {
    name: 'community',
    displayName: 'Community',
    navTitle: '',
    navSubtitle: '',
    component: Community,
  },
  {
    name: 'genesis',
    displayName: 'Genesis',
    navTitle: '',
    navSubtitle: '',
    component: Genesis,
  },
  {
    name: 'roadmap',
    displayName: 'Roadmap',
    navTitle: '',
    navSubtitle: '',
    component: Roadmap,
  },
  {
    name: 'about',
    displayName: 'About',
    navTitle: '',
    navSubtitle: '',
    component: About,
  },
  {
    name: 'thanks',
    displayName: 'Thanks',
    navTitle: '',
    navSubtitle: '',
    component: Thanks,
  }
]