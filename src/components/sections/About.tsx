import React from 'react';

import { GetSoulyx } from '../GetSoulyx'
import { TextSection } from '../TextSection'

export function About() {
  return (
    <>
      <GetSoulyx />
      <TextSection
        title="LOREM IPSUM DOLOR SIT."
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
      />
    </>
  )
}
