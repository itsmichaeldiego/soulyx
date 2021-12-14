import React, { useState } from 'react';
import styled from 'styled-components';
import { useDesktopMediaQuery } from '../../../lib/mediaQueryHelper';

type IFaqTableProps = {
  data: any[];
}

type IExpandedProps = {
  expanded: boolean;
}

const ROW_LIMIT = 5;
const VIEW_MORE_AMOUNT = 5;

export function FaqTable({ data }: IFaqTableProps): JSX.Element {
  const isDesktop = useDesktopMediaQuery();
  const [rowLimit, setRowLimit] = useState(isDesktop ? 10 : ROW_LIMIT);
  const [viewMore, setViewMore] = useState(true);
  const [selectedQuestionIds, setSelectedQuestionIds] = useState<any[]>([]);

  const handleViewMore = () => {
    if (!viewMore) {
      setRowLimit(ROW_LIMIT);
      setViewMore(true);
    } else {
      setRowLimit(rowLimit + VIEW_MORE_AMOUNT);
      setViewMore(false);
    }
  };

  const visibleRows = data?.slice(0, rowLimit);

  const toggle = (e: React.SyntheticEvent, selectedQuestionId: string) => {
    e.stopPropagation();
    const selectedIds = [...selectedQuestionIds];
    if (selectedQuestionIds.includes(selectedQuestionId)) {
      const newSelected = selectedIds.filter(selectedId => selectedId !== selectedQuestionId);
      setSelectedQuestionIds(newSelected);
    } else {
      setSelectedQuestionIds([...selectedIds, selectedQuestionId]);
    }
  };

  return (
    <TableWrapper>
      <TableBody>
        <TableHeader>FAQS</TableHeader>
        {visibleRows.map((entry) => {
          const expanded = selectedQuestionIds.includes(entry.id);
          return (
            <TableRow key={entry.id} expanded={expanded}>
              <Question onClick={(e) => toggle(e, entry.id)} expanded={expanded}>{entry.question}<ToggleIcon expanded={expanded}>+</ToggleIcon></Question>
              <Answer expanded={expanded}>{entry.answer}</Answer>
            </TableRow>
          )}
        )}
      </TableBody>
      <ViewMoreWrapper>
        {!isDesktop && <ViewMoreButton onClick={handleViewMore}>{viewMore ? 'View more' : 'View less'}</ViewMoreButton>}
      </ViewMoreWrapper>
    </TableWrapper>
  );
}

const TableWrapper = styled.div`
  background-color: ${({ theme }) => theme.bg.primary};
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.cta.primary};;
  color: ${({ theme }) => theme.cta.primary};
  display: grid;

  margin: ${({ theme }) => theme.spacing(0, 5)};

  @media (max-width: 767px) {
    margin: 0;
  }
`;


const TableHeader = styled.div`
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.cta.primary};
  display: flex;
  font-size: 10px;
  height: 88px;
  padding: 38px;
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
  flex-direction: column;

  &:nth-child(even) {
    background-color: rgba(255, 81, 40, 0.05);
  }

  ${({ expanded }: IExpandedProps) =>
    expanded &&
      `
        border-bottom: none;
      `}
`;

const Question = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  line-height: 20px;
  padding: 26px;
  width: 100%;
  z-index: 2;

  &:focus, :active, :visited {
    background-color: ${({ theme }) => theme.cta.primary};
    color: white;
  }

  @media (max-width: 767px) {
    width: 98%;
    padding: 16px;
  }

  ${({ expanded }: IExpandedProps) =>
    expanded &&
      `
        font-weight: bold;
        border-bottom: none;
      `}
`;


const Answer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.cta.primary};
  color: ${({ theme }) => theme.cta.primary};
  display: flex;
  height: 0;
  opacity: ${props => (props.expanded ? "1" : "0")};
  transition: height 0.2s, opacity 0.2s ease-out;
  z-index: -1;
  white-space: pre-line;
  font-weight: 300;

  ${({ expanded }: IExpandedProps) =>
    expanded &&
      `
        padding: 18px;
        padding-top: 8px;
        height: 100%;
        z-index: 1;
      `}
`;

const ViewMoreWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1 1 100%;
  height: 88px;
  justify-content: center;
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

const ToggleIcon = styled.span`
  font-size: 14px;
  transition: 0.2s;

  ${({ expanded }: IExpandedProps) =>
    expanded && `
      transform: rotate(45deg);
    `}


  @media (max-width: 767px) {
    font-size: 20px;
  }
`;