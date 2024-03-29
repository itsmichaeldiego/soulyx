import React from 'react';
import styled from 'styled-components';

export function Section({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  min-height: ${({ theme }) => `calc(100vh - ${theme.sizes.header})`};
  height: 100%;
`;
