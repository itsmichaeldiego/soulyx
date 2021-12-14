import React, { useState } from 'react';
import styled from 'styled-components';
import { useMobileMediaQuery } from '../lib/mediaQueryHelper';

type ILaunchDetailsTableProps = {
  data: any[];
};

const ROW_LIMIT = 5;

export function LaunchDetailsTable({ data }: ILaunchDetailsTableProps): JSX.Element {
  const isMobile = useMobileMediaQuery();
  const [rowLimit, setRowLimit] = useState(isMobile ? ROW_LIMIT : 10);
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
      <TableHeader>SOULx LAUNCH / AUCTION DETAILS</TableHeader>
      <TableBody>
        {visibleRows.map((entry) => (
          <TableRow key={entry.name}>
            <TableCell>{entry.name}</TableCell>
            <TableCell>{entry.description}</TableCell>
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
  background-color: ${({ theme }) => theme.bg.primary};
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.cta.primary};
  color: ${({ theme }) => theme.cta.primary};
  display: grid;
  font-size: 16px;
  margin: ${({ theme }) => theme.spacing(0, 5)};

  @media (min-width: 1440px) {
    margin: 0 auto;
  }

  @media (max-width: 767px) {
    font-size: 14px;
    margin: 0;
    margin-right: 24px;
  }
`;

const TableHeader = styled.div`
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.cta.primary};
  display: flex;
  font-size: 10px;
  height: 88px;
  padding: 28px;
  width: 100%;
`;

const TableBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TableRow = styled.div`
  background-color: ${({ theme }) => theme.bg.primary};
  border-bottom: 1px solid ${({ theme }) => theme.cta.primary};
  display: flex;

  &:nth-child(even) {
    background-color: rgba(255, 81, 40, 0.05);
  }


  @media (max-width: 767px) {
    flex-direction: column;
    padding: 28px;
  }
`;

const TableCell = styled.div`
  align-items: center;
  display: flex;
  flex-basis: 40%;
  height: 100%;
  padding: 38px;

  &:first-child {
    font-weight: bold;
  }

  &:not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.cta.primary};
  }

  &:nth-child(2) {
    flex-basis: 60%;
  }

  @media (max-width: 767px) {
    padding: 0;
  
    &:first-child {
      font-size: 10px;
      font-weight: 500;
      margin-bottom: 8px;
    }

    &:not(:last-child) {
      border: none;
    }
  }
`;

const ViewMoreWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1 1 100%;
  height: 88px;
  justify-content: center;

  @media (min-width: 767px) {
    opacity: 0;
  }
`;

const ViewMoreButton = styled.button`
  background-color: ${({ theme }) => theme.bg.primary};
  border: none;
  color: ${({ theme }) => theme.cta.primary};
  cursor: pointer;
  margin: 0;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
`;
