import React from 'react';

import { FlipCarousel } from '../../components/FlipCarousel'

import { CARDS } from './data';

export function LastNews() {
  return (
    <>
      <FlipCarousel cards={CARDS} />
    </>
  )
}