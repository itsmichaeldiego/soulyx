import React from 'react';
import styled from 'styled-components';

type IColorMarkerProps = {
  color: string;
  width: number;
}

type ITableRowProps = {
  width: number;
}

export function TokenizeRoadmap(): JSX.Element {
  return (
    <TableWrapper>
      <TableHeader><span>GENESIS DISTRIBUTION</span><span>2021</span></TableHeader>
      <TableBody>
        <TableRow width={40}>
          <span>40%</span><TableRowText>COMMUNITY TREASURY</TableRowText>
        </TableRow>
        <TableRow width={30}>
          <span>30%</span><TableRowText>TEAM</TableRowText>
        </TableRow>
        <TableRow width={15}>
          <span>15%</span><TableRowText>SEED INVESTORS</TableRowText>
        </TableRow>
        <TableRow width={10}>
          <span>10%</span><TableRowText>IDO+LP</TableRowText>
        </TableRow>
        <TableRow width={5}>
          <span>5%</span><TableRowText>AIRDROP</TableRowText>
        </TableRow>
      </TableBody>
      <TableFooter>
        <ColorMarker width={40} color="#FF3E12"></ColorMarker>
        <ColorMarker width={30} color="rgba(255, 62, 18, 0.8)"></ColorMarker>
        <ColorMarker width={15} color="rgba(255, 62, 18, 0.6)"></ColorMarker>
        <ColorMarker width={10} color="rgba(255, 62, 18, 0.3)"></ColorMarker>
        <ColorMarker width={5} color="rgba(255, 62, 18, 0.1)"></ColorMarker>
      </TableFooter>
    </TableWrapper>
  );
}

const TableWrapper = styled.div`
  align-items: center;
  border: 1px solid ${({ theme }) => theme.cta.primary};
  display: flex;
  flex-direction: column;
  font-size: 12px;
  justify-content: center;
  margin: ${({ theme }) => theme.spacing(0, 5)};
  max-width: 1440px;

  @media (min-width: 1440px) {
    margin: 0 auto;
  }
`;

const TableHeader = styled.div`
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.cta.primary};
  display: flex;
  font-weight: bold;
  height: 60px;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 26px;
  width: 100%;
`;

const TableBody = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.cta.primary};
  display: flex;
  width: 100%;
`;

const TableRow = styled.div`
  display: flex;
  flex-direction: column;
  height: 160px;
  justify-content: space-between;
  padding: 10px 16px;

  &:not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.cta.primary};
  }

  ${({ width }: ITableRowProps) => `width: ${width}%;`}
`;

const TableRowText = styled.span`
  transform: rotate(-180deg);
  writing-mode: vertical-rl;
`;

const TableFooter = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
`;

const ColorMarker = styled.div`
  ${({ width, color }: IColorMarkerProps) =>
  `
    width: ${width}%;
    background: ${color};
  `}
`;