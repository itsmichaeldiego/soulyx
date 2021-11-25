import React from 'react';

import styled from 'styled-components';

interface ILinkButtonProps {
  text: string;
  href: string;
  target?: string;
}

export function LinkButton({ text, href, ...props }: ILinkButtonProps): JSX.Element {
  return (
    <Wrapper href={href} {...props}>
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