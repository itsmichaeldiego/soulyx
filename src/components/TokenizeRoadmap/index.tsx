import { TokenizeRoadmap as Mobile } from './TokenizeRoadmapMobile'
import { TokenizeRoadmap as Desktop } from './TokenizeRoadmapDesktop'

export function TokenizeRoadmap() {
  const mobile = false;
  if (mobile) {
    return <Mobile />
  }
  return <Desktop />
}