import React from 'react';
import styled from 'styled-components';
import { ROADMAP_TABLE_DATA, TABLE_HEADERS } from './data';

export function RoadmapTable(): JSX.Element {
  return (
    <TableWrapper>
      <TableHeader>
        {TABLE_HEADERS.map(header => <HeaderCell key={header}>{header}</HeaderCell>)}
      </TableHeader>
      <TableBody>
        {ROADMAP_TABLE_DATA.map((entry) => (
          <TableRow key={entry.name}>
            <TableCell>{entry.name}</TableCell>
            <TableCell>{entry.description}</TableCell>
            <TableCell>{entry.status}</TableCell>
            <TableCell>{entry.year}</TableCell>
            <TableCell>{entry.quarter}</TableCell>
          </TableRow>  
        ))}
      </TableBody>
      <ViewMoreWrapper>
        {/* TODO: Add functionality */}
        <ViewMoreButton>View More</ViewMoreButton>
      </ViewMoreWrapper>
    </TableWrapper>
  );
}

const TableWrapper = styled.div`
  background-color: ${({ theme }) => theme.cta.primary};
  color: white;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: grid;
  margin: 0 40px;
`;

const TableHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  height: 88px;
  width: 100%;
  text-transform: uppercase;
`;

const HeaderCell = styled.div`
  display: flex;
  height: 100%;
  flex-basis: 15%;
  justify-content: center;
  padding: 38px;

  &:first-child, &:nth-child(2) {
    justify-content: flex-start;
  }

  &:nth-child(2) {
    flex-basis: 50%;
  }
`;

const TableBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TableRow = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  height: 78px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  background-color: ${({ theme }) => theme.cta.primary};

  &:first-child {
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    // This looks too bright, but is extracted from figma. TODO: check and replace
    background-color: #FF5128;
  }
`;

const TableCell = styled.div`
  display: flex;
  align-items: center;
  padding: 38px;
  height: 100%;
  flex-basis: 15%;
  justify-content: center;

  &:first-child, &:nth-child(2) {
    justify-content: flex-start;
  }

  &:first-child {
    font-weight: bold;
  }

  &:not(:last-child) {
    border-right: 1px solid rgba(255, 255, 255, 0.3);
  }

  &:nth-child(2) {
    flex-basis: 50%;
  }
`;

const ViewMoreWrapper = styled.div`
  display: flex;
  flex: 1 1 100%;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

const ViewMoreButton = styled.button`
  margin: 0;
  padding: 0;
  color: white;
  border: none;
  background-color: ${({ theme }) => theme.cta.primary};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
