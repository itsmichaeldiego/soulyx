import React from 'react';
import styled from 'styled-components';

import { TextSection } from '../components/TextSection'
import { SectionTitle } from '../components/SectionTitle';

export function Community() {
  return (
    <div className="position-relative">
      <Wrapper>
        <SectionTitle imageUrl="/images/community.svg" alt="COMMUNITY" />
      </Wrapper>
      <FloatingContent>
        <Text>
          WHAT OUR SOUL STANDS FOR: POWER IN THE HANDS OF THE COMMUNITY.
        </Text>
        <TextSection
          title="INCLUSION AND PLURALITY: OUR FUNDAMENTAL TOOLS"
          text="SOULx investment will be destined towards the development of projects that will fuel artistic creation, aiming to directly transform the experience and interaction between creators, art pieces and users/spectators. The Community Treasury will be owned and managed by SOULx holders once the Suspended Soul DAO is developed. While in it’s beginning stages, it will be moderated by the Suspended Soul Foundation, keeping as its main goals the development of immersive experiences, and the encouragement of emerging artistic endeavour (patronage), putting into motion subvention projects for emerging artist's with a promising future. "
        />
      </FloatingContent>
    </div>
  );
}

const Wrapper = styled.div`
  background-image: url('/images/community-faces.png');
  background-repeat: no-repeat;
  background-size: contain;
  height: 300vh;
  position: relative;

  @media (max-width: 767px) {
    background-size: contain;
    height: 624px;
  }

  @media (min-width: 1441px) {
    // background-size: cover;
  }
`;

const FloatingContent = styled.div`
  margin-left: ${({ theme }) => theme.spacing(10)};
  margin-top: ${({ theme }) => theme.spacing(-80)};
`


const Text = styled.div`
  max-width: ${({ theme }) => theme.spacing(27)};
`