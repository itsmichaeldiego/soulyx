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
      <TableHeader><span>Virtual Tokenize</span><span>2021</span></TableHeader>
      <TableBody>
        <TableRow width={40}>
          <span>40%</span><TableRowText>Community Treasure</TableRowText>
        </TableRow>
        <TableRow width={20}>
          <span>20%</span><TableRowText>Community Treasure</TableRowText>
        </TableRow>
        <TableRow width={20}>
          <span>20%</span><TableRowText>Community Treasure</TableRowText>
        </TableRow>
        <TableRow width={10}>
          <span>10%</span><TableRowText>Community Treasure</TableRowText>
        </TableRow>
        <TableRow width={5}>
          <span>5%</span><TableRowText>Airdrop</TableRowText>
        </TableRow>
        <TableRow width={5}>
          <span>5%</span><TableRowText>Investors</TableRowText>
        </TableRow>
      </TableBody>
      <TableFooter>
        <ColorMarker width={40} color="#FF3E12"></ColorMarker>
        <ColorMarker width={20} color="rgba(255, 62, 18, 0.8)"></ColorMarker>
        <ColorMarker width={20} color="rgba(255, 62, 18, 0.6)"></ColorMarker>
        <ColorMarker width={10} color="rgba(255, 62, 18, 0.3)"></ColorMarker>
        <ColorMarker width={5} color="rgba(255, 62, 18, 0.2)"></ColorMarker>
        <ColorMarker width={5} color="rgba(255, 62, 18, 0.1)"></ColorMarker>
      </TableFooter>
    </TableWrapper>
  );
}

const TableWrapper = styled.div`
  align-items: center;
  border: 1px solid ${({ theme }) => theme.cta.primary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  font-size: 12px;
  justify-content: center;
  text-transform: uppercase;
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
`

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
`

const TableRowText = styled.span`
  transform: rotate(-180deg);
  writing-mode: vertical-rl;
`

const TableFooter = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
`

const ColorMarker = styled.div`
  ${({ width, color }: IColorMarkerProps) =>
  `
    width: ${width}%;
    background: ${color};
  `}
`