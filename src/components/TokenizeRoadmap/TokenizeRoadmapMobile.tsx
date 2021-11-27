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
        <ColorMarker height={20} color="rgba(255, 62, 18, 0.8)"></ColorMarker>
        <ColorMarker height={20} color="rgba(255, 62, 18, 0.6)"></ColorMarker>
        <ColorMarker height={10} color="rgba(255, 62, 18, 0.3)"></ColorMarker>
        <ColorMarker height={5} color="rgba(255, 62, 18, 0.2)"></ColorMarker>
        <ColorMarker height={5} color="rgba(255, 62, 18, 0.1)"></ColorMarker>
      </TableColorMarkers>
      <TableBody>
        <TableRow height={40}>
          <span>
            {`Community
            Treasure`}
          </span><span>40%</span>
        </TableRow>
        <TableRow height={20}>
          <span>
            {`Community
            Treasure`}
          </span><span>20%</span>
        </TableRow>
        <TableRow height={20}>
          <span>
            {`Community
            Treasure`}
          </span><span>20%</span>
        </TableRow>
        <TableRow height={10}>
          <span>
            {`Community
            Treasure`}
          </span><span>10%</span>
        </TableRow>
        <TableRow height={5}>
          <span>Airdrop</span><span>5%</span>
        </TableRow>
        <TableRow height={5}>
          <span>Investors</span><span>5%</span>
        </TableRow>
      </TableBody>
      <TableHeader><TableHeaderText>Virtual Tokenize</TableHeaderText><TableHeaderText>&nbsp; &nbsp; &nbsp; &nbsp;2021</TableHeaderText></TableHeader>
    </TableWrapper>
  );
}

const TableWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.cta.primary};
  display: flex;
  font-size: 12px;
  height: 545px;
  text-transform: uppercase;
  width: 328px;
`;

const TableHeader = styled.div`
  align-items: center;
  border-left: 1px solid ${({ theme }) => theme.cta.primary};
  display: flex;
  flex-direction: column;
  font-weight: bold;
  padding-top: 40px;
  width: 60px;
`;

const TableBody = styled.div`
  border-left: 1px solid ${({ theme }) => theme.cta.primary};
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 194px;
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
  width: 68px;
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