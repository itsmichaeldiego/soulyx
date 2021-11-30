import React, { useState } from 'react';
import styled from 'styled-components';

type IFaqTableProps = {
  data: any[];
}

type IExpandedProps = {
  expanded: boolean;
}

const ROW_LIMIT = 5;
const VIEW_MORE_AMOUNT = 3;

export function FaqTable({ data }: IFaqTableProps): JSX.Element {
  const [rowLimit, setRowLimit] = useState(ROW_LIMIT);
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
    console.log(selectedQuestionId);
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
            <>
              <TableRow key={entry.id} expanded={expanded}>
                <Question onClick={(e) => toggle(e, entry.id)} expanded={expanded}>{entry.question}<ToggleIcon expanded={expanded}>+</ToggleIcon></Question>
                <Answer expanded={expanded}>{entry.answer}</Answer>
              </TableRow>  
            </>
          )}
        )}
      </TableBody>
      <ViewMoreWrapper>
        <ViewMoreButton onClick={handleViewMore}>{viewMore ? 'View more' : 'View less'}</ViewMoreButton>
      </ViewMoreWrapper>
    </TableWrapper>
  );
}

const TableWrapper = styled.div`
  background-color: ${({ theme }) => theme.cta.secondary};
  border-radius: 20px;
  color: ${({ theme }) => theme.cta.primary};
  border: 1px solid ${({ theme }) => theme.cta.primary};;
  display: grid;
  margin: 0 40px;

  @media (max-width: 767px) {
    margin: 0;
  }
`;

const TableBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Question = styled.div`
  padding: 32px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  width: 100%;
  line-height: 20px;

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

const TableRow = styled.div`
  background-color: ${({ theme }) => theme.cta.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.cta.primary};
  display: flex;
  flex-direction: column;

  &:first-child {
    border-top: 1px solid solid ${({ theme }) => theme.cta.primary};;
  }

  &:nth-child(even) {
    background-color: rgba(255, 81, 40, 0.05);
  }

  ${({ expanded }: IExpandedProps) =>
    expanded &&
      `
        border-bottom: none;
      `}
`;

const ViewMoreWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1 1 100%;
  height: 100px;
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

const TableHeader = styled.div`
  align-items: center;
  display: flex;
  font-size: 10px;
  height: 88px;
  text-transform: uppercase;
  width: 100%;
  padding: 38px;
  border-bottom: 1px solid ${({ theme }) => theme.cta.primary};
`;

const Answer = styled.div`
  color: ${({ theme }) => theme.cta.primary};
  opacity: ${props => (props.expanded ? "1" : "0")};
  height: 0px;
  border-bottom: 1px solid ${({ theme }) => theme.cta.primary};
  transition: height 0.2s, opacity 0.2s, padding 0.3s ease-out;
  display: flex;
  z-index: -1;

  ${({ expanded }: IExpandedProps) =>
    expanded &&
      `
        padding: 32px;
        padding-top: 8px;
        height: 100%;
        z-index: 1;
      `}
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