import React from 'react';
import styled from 'styled-components';

import { TOKEN_NAME } from '../dom/token';

import { TextSection } from '../components/TextSection'
import { SectionTitle } from '../components/SectionTitle';

export function Community() {
  return (
    <div className="position-relative">
      <Wrapper>
        <SectionTitleContainer data-scroll data-scroll-speed="3">
          <SectionTitle imageUrl="/images/community.svg" alt="COMMUNITY" />
        </SectionTitleContainer>
      </Wrapper>
      <FloatingContent>
        <Text>
          WHAT OUR SOUL STANDS FOR: POWER IN THE HANDS OF THE COMMUNITY.
        </Text>
        <TextSection
          title="INCLUSION AND PLURALITY: OUR FUNDAMENTAL TOOLS"
          text={`${TOKEN_NAME} investment will be destined towards the development of projects that will fuel artistic creation, aiming to directly transform the experience and interaction between creators, art pieces and users/spectators. The Community Treasury will be owned and managed by ${TOKEN_NAME} holders once the Suspended Soul DAO is developed. While in it’s beginning stages, it will be moderated by the Suspended Soul Foundation, keeping as its main goals the development of immersive experiences, and the encouragement of emerging artistic endeavour (patronage), putting into motion subvention projects for emerging artist's with a promising future.`}
        />
      </FloatingContent>
    </div>
  );
}

const Wrapper = styled.div`
  background-image: url('/images/community-faces.png');
  background-repeat: no-repeat;
  background-size: contain;
  height: 200vw;
  position: relative;
`;

const SectionTitleContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const FloatingContent = styled.div`
  margin-top: -85vw;
`


const Text = styled.div`
  margin-left: 5vw;
  width: 30vw;
  max-width: ${({ theme }) => theme.spacing(30)};
`