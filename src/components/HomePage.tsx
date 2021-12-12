import React from 'react'
import styled from 'styled-components';
import { Element } from 'react-scroll'

import { getPad } from '../lib/utils'
import { NAV_ITEMS } from '../lib/navigation'
import { SectionHeader } from './SectionHeader'

export function HomePage() {
  return (
    <Wrapper>
      {NAV_ITEMS.map((item, index) => (
        <Element key={item.name} name={item.name}>
          {!item.hideHeader && (
            <SectionHeader 
              number={`${getPad(index + 1)} - ${getPad(NAV_ITEMS.length)}`} 
              name={item.headerName}
              description={item.headerDescription}
            />
          )}
          {item.component()}
        </Element>
      ))}
    </Wrapper> 
  )
}

const Wrapper = styled.main`
  overflow-x: hidden
`