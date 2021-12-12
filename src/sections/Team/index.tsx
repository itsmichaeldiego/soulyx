import React from 'react';

import { FlipCarousel } from '../../components/FlipCarousel'

import { CARDS } from './data';

export function Team() {
  return (
    <>
      <FlipCarousel cards={CARDS} />
    </>
  )
}