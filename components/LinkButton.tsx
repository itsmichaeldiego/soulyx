import React from 'react';

import styled from 'styled-components';

interface ILinkButtonProps {
  text: string;
  href: string;
}

export function LinkButton({ text, href }: ILinkButtonProps): JSX.Element {
  return (
    <Wrapper href={href}>
      {text}
    </Wrapper>
  )
}

const Wrapper = styled.a`
  // TODO: use units
  padding: 12px 6px;
  border: 1px solid ${({ theme }) => theme.cta.primary};
  border-radius: 100%;
`