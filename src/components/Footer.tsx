import React from 'react';
import styled from 'styled-components';

export function Footer(): JSX.Element {
  return (
    <Wrapper>
      <FooterLinks>
        <FooterLink href="https://www.notion.so/suspendedsoul/TERMS-CONDITIONS-f484b21c8122490496ea64babb500d1e">
          TERMS
        </FooterLink>
        {/* <FooterLink href="https://miso.sushi.com/">COOKIES</FooterLink> */}
        <FooterLink href="https://www.notion.so/suspendedsoul/PRIVACY-POLICY-TREATMENT-OF-PERSONAL-DATA-82c8865284d94bd7ada2bcb9cb795277">
          PRIVACY
        </FooterLink>
        {/* <FooterLink href="https://miso.sushi.com/">CREDITS</FooterLink> */}
      </FooterLinks>
      <MediaLinks>
        <FooterLink href="https://twitter.com/suspendedsoul_">TWITTER</FooterLink>
        <FooterLink href="https://discord.com/invite/D4EpbKBkpA">DISCORD</FooterLink>
        <FooterLink href="https://instagram.com/suspendedsoul_">INSTAGRAM</FooterLink>
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