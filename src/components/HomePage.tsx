import React from 'react'
import { Element } from 'react-scroll'

import { getPad } from '../lib/utils'
import { NAV_ITEMS } from '../lib/navigation'
import { SectionHeader } from './SectionHeader'

export function HomePage() {
  return (
    <>
      {NAV_ITEMS.map((item, index) => (
        <Element key={item.name} name={item.name}>
          {!item.hideHeader && (
            <SectionHeader
              number={`${getPad(index)} - ${getPad(NAV_ITEMS.length - 1)}`}
              name={item.headerName}
              description={item.headerDescription}
            />
          )}
          {item.component()}
        </Element>
      ))}
    </>
  )
}

