import React from 'react'
import { Element } from 'react-scroll'

import { NAV_ITEMS } from '../lib/navigation'
import { SectionHeader } from './SectionHeader'

export function HomePage() {
  return (
    <>
      {NAV_ITEMS.map((item, index) => (
        <Element key={item.name} name={item.name}>
          {!item.hideHeader && (
            <SectionHeader 
              number={`${index + 1} - ${NAV_ITEMS.length}`} 
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

