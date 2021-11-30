import styled from 'styled-components';

type ISectionHeaderProps = {
  number: string;
  name: string;
  description: string;
}

export function SectionHeader({ number, name, description }: ISectionHeaderProps) {
  return (
    <Wrapper>
      <HeaderRow><RowText>{number}</RowText></HeaderRow>
      <HeaderRow><RowText>{name}</RowText></HeaderRow>
      <HeaderRow><RowText>{description}</RowText></HeaderRow>
      {/* // TODO: Consume SVG - Figma export is currently broken */}
      <HeaderRow><HeaderIcon src="/images/section-header-icon.png" /></HeaderRow>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  margin: ${({ theme }) => theme.spacing(6)};

  @media (max-width: 767px) {
    margin: ${({ theme }) => theme.spacing(6, 0)};
  }
`;

const HeaderRow = styled.div`
  align-items: flex-start;
  display: flex;
  flex-basis: 15%;
  font-size: 12px;
  height: 100%;
  text-transform: uppercase;

  &:nth-child(2) {
    flex-basis: 40%;
  }

  &:last-child {
    justify-content: flex-end;
    margin-left: auto;
  }

  @media (max-width: 767px) {
    &:nth-child(1) {
      flex-basis: 20%;
    }

    &:nth-child(2) {
      flex-basis: 40%;
    }

    &:nth-child(3) {
      flex-basis: 40%;
    }
  }
`;

const RowText = styled.span`
  display: block;
  max-width: 100%;
`;

const HeaderIcon = styled.img`
  // TODO: this should NOT exist! to be replaced along with SVG asset
  margin-top: -36px;
  @media (max-width: 767px) {
    margin-top: -8px;
    width: 48px;
    height: 48px;
  }
`