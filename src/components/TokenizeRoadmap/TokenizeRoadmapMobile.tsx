import React from 'react';
import styled from 'styled-components';

type IColorMarkerProps = {
  color: string;
  height: number;
}

type ITableRowProps = {
  height: number;
}

export function TokenizeRoadmap(): JSX.Element {
  return (
    <TableWrapper>
      <TableColorMarkers>
        <ColorMarker height={40} color="#FF3E12"></ColorMarker>
        <ColorMarker height={30} color="rgba(255, 62, 18, 0.8)"></ColorMarker>
        <ColorMarker height={15} color="rgba(255, 62, 18, 0.6)"></ColorMarker>
        <ColorMarker height={10} color="rgba(255, 62, 18, 0.3)"></ColorMarker>
        <ColorMarker height={5} color="rgba(255, 62, 18, 0.1)"></ColorMarker>
      </TableColorMarkers>
      <TableBody>
        <TableRow height={40}>
          <span>
            COMMUNITY TREASURY
          </span><span>40%</span>
        </TableRow>
        <TableRow height={30}>
          <span>
            TEAM
          </span><span>30%</span>
        </TableRow>
        <TableRow height={15}>
          <span>
            SEED INVESTORS
          </span><span>15%</span>
        </TableRow>
        <TableRow height={10}>
          <span>
            IDO+LP
          </span><span>10%</span>
        </TableRow>
        <TableRow height={5}>
          <span>AIRDROP</span><span>5%</span>
        </TableRow>
      </TableBody>
      <TableHeader><TableHeaderText>VIRTUAL TOKENIZE</TableHeaderText><TableHeaderText>&nbsp; &nbsp; &nbsp; &nbsp;2021</TableHeaderText></TableHeader>
    </TableWrapper>
  );
}

const TableWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.cta.primary};
  display: flex;
  font-size: 12px;
  height: 545px;
  width: 100%;
`;

const TableHeader = styled.div`
  align-items: center;
  border-left: 1px solid ${({ theme }) => theme.cta.primary};
  display: flex;
  flex-direction: column;
  font-weight: bold;
  padding-top: 40px;
  width: 18%;
`;

const TableBody = styled.div`
  border-left: 1px solid ${({ theme }) => theme.cta.primary};
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 61%;
`;

const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 6px 10px;
  white-space: pre-line;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.cta.primary};
  }

  ${({ height }: ITableRowProps) => `height: ${height}%;`}
`;

const TableColorMarkers = styled.div`
  display: flex;
  flex-direction: column;
  width: 21%;
`;

const ColorMarker = styled.div`
  ${({ height, color }: IColorMarkerProps) =>
  `
    height: ${height}%;
    background: ${color};
  `}
`;

const TableHeaderText = styled.span`
  writing-mode: vertical-lr;
`;