import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TABLE_HEADERS } from '../sections/Roadmap/data';
import { IRoadmapEntry } from '../sections/Roadmap/types';

type IRoadmapTableProps = {
  data: IRoadmapEntry[];
};

const ROW_LIMIT = 5;

export function RoadmapTable({ data }: IRoadmapTableProps): JSX.Element {
  const [rowLimit, setRowLimit] = useState(ROW_LIMIT);
  const [viewMore, setViewMore] = useState(true);

  const handleViewMore = () => {
    if (!viewMore) {
      setRowLimit(ROW_LIMIT);
      setViewMore(true);
    } else {
      setRowLimit(data.length);
      setViewMore(false);
    }
  };

  const visibleRows = data?.slice(0, rowLimit);

  return (
    <TableWrapper>
      <TableHeader>
        {TABLE_HEADERS.map(header => <HeaderCell key={header}>{header}</HeaderCell>)}
      </TableHeader>
      <TableBody>
        {visibleRows.map((entry) => (
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
        <ViewMoreButton onClick={handleViewMore}>{viewMore ? 'View more' : 'View less'}</ViewMoreButton>
      </ViewMoreWrapper>
    </TableWrapper>
  );
}

const TableWrapper = styled.div`
  background-color: ${({ theme }) => theme.cta.primary};
  border-radius: 20px;
  color: white;
  display: grid;
  font-weight: 300;

  // TODO: useMedia instead (this doesn't look too bad tbh)
  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;

const TableHeader = styled.div`
  align-items: center;
  display: flex;
  font-size: 12px;
  height: ${({ theme }) => theme.spacing(11)};
  width: 100%;
`;

const TableBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const HeaderCell = styled.div`
  display: flex;
  flex-basis: 15%;
  height: 100%;
  justify-content: center;
  padding: 38px;

  &:first-child, &:nth-child(2) {
    justify-content: flex-start;
  }

  &:nth-child(2) {
    flex-basis: 50%;
  }
`;

const TableRow = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.cta.primary};
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  font-size: 14px;
  height: 78px;

  &:first-child {
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    // This looks too bright, but is extracted from figma. TODO: check and replace
    background-color: #FF5128;
  }
`;

const TableCell = styled.div`
  align-items: center;
  display: flex;
  flex-basis: 15%;
  height: 100%;
  justify-content: center;
  padding: 38px;

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
  align-items: center;
  display: flex;
  flex: 1 1 100%;
  height: 100px;
  justify-content: center;
`;

const ViewMoreButton = styled.button`
  background-color: ${({ theme }) => theme.cta.primary};
  border: none;
  color: white;
  cursor: pointer;
  margin: 0;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
`;
