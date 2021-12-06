import React from 'react'
import { Element } from 'react-scroll'

import { NAV_ITEMS } from '../lib/navigation'

export function HomePage() {
  return (
    <>
      {NAV_ITEMS.map((item) => (
        <Element key={item.name} name={item.name}>
          {item.component()}
        </Element>
      ))}
    </>
  )
}

