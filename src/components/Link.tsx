import React from 'react';
import styled from 'styled-components';

type ILinkProps =  React.PropsWithChildren<{
  href: string;
  target?: string;
}>

export function Link({ href, children, ...props }: ILinkProps): JSX.Element {
  return (
    <Wrapper href={href} {...props}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.a`
  font-size: 16px;
  line-height: 16px;
  font-family: ${({ theme }) => theme.font.primary};
  // Note: underline might not work with languages such as chinese or arabic
  text-decoration: underline;
`