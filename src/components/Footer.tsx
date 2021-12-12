import React from 'react';
import styled from 'styled-components';

export function Footer(): JSX.Element {
  return (
    <Wrapper>
      <FooterLinks>
        <FooterLink href="https://miso.sushi.com/">LEGAL ADVICE</FooterLink>
        <FooterLink href="https://miso.sushi.com/">COOKIES</FooterLink>
        <FooterLink href="https://miso.sushi.com/">PRIVACITY</FooterLink>
        <FooterLink href="https://miso.sushi.com/">CREDITS</FooterLink>
      </FooterLinks>
      <MediaLinks>
        <FooterLink href="https://miso.sushi.com/">TWITTER</FooterLink>
        <FooterLink href="https://miso.sushi.com/">DISCORD</FooterLink>
        <FooterLink href="https://miso.sushi.com/">INSTAGRAM</FooterLink>
      </MediaLinks>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 42px;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(0, 4)};

  @media (max-width: 767px) {
    flex-direction: column-reverse;
    padding: 0;
    margin-bottom: ${({ theme }) => theme.spacing(6)};
  }
`;

const FooterLink = styled.a`
  font-size: 10px;
  margin: ${({ theme }) => theme.spacing(0, 1)};

  @media (max-width: 767px) {
    margin: ${({ theme }) => theme.spacing(0, 0.5)};
  }
`;

const FooterLinks = styled.div`
  font-weight: 300;
  display: flex;
  align-items: center;
`;

const MediaLinks = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
`;