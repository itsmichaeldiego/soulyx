import { useLayoutEffect, useState } from 'react';
import React from 'react';
import styled from 'styled-components';

import { useDesktopMediaQuery } from '../../lib/mediaQueryHelper';

import { EntrySelect } from './EntrySelect';
import { CHART_DATA, Y_AXIS_LABELS } from './data';

type IStackedBarProps = {
  height: number;
  color?: string;
};

type IBarProps = {
  visible: boolean;
};

type IInnerLabelProps = {
  visible: boolean;
  // God knows this shouldn't exist
  shouldPosition: boolean;
};

type Stack = {
  label: string;
  color: string;
  value: number;
}

type IChartBarProps = {
  stacks: Stack[];
}

type ChartEntry = {
  name: string;
  stacks: Stack[];
}

function ChartBar({ stacks }: IChartBarProps) {
  const [visible, setVisible] = useState(false);
  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      setVisible(true);
    })
  }, []);

  return <Bar visible={visible}>
    {stacks.map(({ label, color, value }: Stack, index) => (
      <StackedBar
        key={`${label+index}`}
        color={color}
        height={value}
      >
        <InnerLabel visible={visible} shouldPosition={value > 6}>{label}</InnerLabel>
      </StackedBar>
    ))}
  </Bar>
}

export function RoadmapChart() {
  const isDesktop = useDesktopMediaQuery();
  const [visible, setVisible] = useState(isDesktop ? 'all' : '2021');

  const mappedData = (data: ChartEntry[]) => {
    if (visible === 'all') {
      return data;
    } else {
      return data.filter(entry => {
        return entry.name === visible
      });
    }
  };

  const chartData = mappedData(CHART_DATA);
  const selectOptions = CHART_DATA.map(entry => entry.name);

	return (
    <Wrapper>
      <ChartWrapper>
        <GridWrapper>
          {/* We use four rows to calculate bar heights up to 40% */}
          {Y_AXIS_LABELS.map(label => (
            <GridRow key={label}>
              {label}
            </GridRow>
          ))}
          {/* So 40% falls off, this is a way to display the label */}
          <YAxisTopLabel>40%</YAxisTopLabel>
        </GridWrapper>
        {chartData?.map((bar, index) => (
          <BarWrapper key={index}>
            <ChartBar stacks={bar.stacks} />
            {isDesktop && <BarLabel>{bar.name}</BarLabel>}
          </BarWrapper>
        ))}
      </ChartWrapper>
      {!isDesktop && <EntrySelect options={selectOptions} selected={visible} onChange={setVisible} />}
    </Wrapper>
	);
};

const Wrapper = styled.div`
  align-items: center;
  background-color: #E5E5E5;
  display: flex;
  text-transform: uppercase;
  flex-direction: column;
  margin: 64px 0;

  @media (max-width: 767px) {
    position: relative;
    align-items: flex-end;
  }
`;

const ChartWrapper = styled.div`
  display: flex;
  font-size: 12px;
  height: 520px;
  justify-content: space-between;
  padding-left: 10%;
  padding-right: 2%;
  position: relative;
  width: 100%;

  @media (max-width: 767px) {
    padding-left: 69px;
    padding-right: 0;
  }
`;

const GridWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  left: 0px;
  position: absolute;
  width: 100%;
`;

const GridRow = styled.div`
  align-items: flex-end;
  border-bottom: 1px dashed ${({ theme }) => theme.cta.primary};
  display: flex;
  flex-basis: 25%;
  padding-bottom: 20px;

  &:last-of-type {
    border-top: 1px dashed ${({ theme }) => theme.cta.primary};
  }

  @media (max-width: 767px) {
    padding-bottom: 16px;
    padding-left: 16px;
  }
`;

const YAxisTopLabel = styled.span`
  position: absolute;
  top: -28px;

  @media (max-width: 767px) {
    left: 16px;
  }
`;

const BarWrapper = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  z-index: 2;
`;

const Bar = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 0%;
  justify-content: flex-start;
  margin-top: auto;
  width: 220px;

  ${({ visible }: IBarProps) =>
    visible && `
      height: 100%;
      transition: height 0.5s linear;
    `}

  @media (max-width: 767px) {
    width: 242px;
  }
`;

const StackedBar = styled.div`
  align-items: center;
  display: flex;
  padding-left: 12px;
  position: relative;

  ${({ color, height }: IStackedBarProps) => `
    background-color: ${color};
    height: ${height}%;
  `}

  // borders (...)
  border-left: 1px solid ${({ theme }) => theme.cta.primary};
  border-right: 1px solid ${({ theme }) => theme.cta.primary};

  &:not(:first-of-type) {
    border-bottom: 1px dashed ${({ theme }) => theme.cta.primary};
  }

  &:first-of-type {
    border-bottom: 1px solid ${({ theme }) => theme.cta.primary};
    // Split 'Community Treasure' text into separate lines
    word-spacing: 999px;
  }

  &:last-of-type {
    border-top: 1px solid ${({ theme }) => theme.cta.primary};
  }
`;

const InnerLabel = styled.div`
  ${({ shouldPosition }: IInnerLabelProps) =>
   shouldPosition && `
    left: 12px;
    position: absolute;
    top: 8px;
  `}
  opacity: 0;
  transition: opacity 0.5s ease-in;
  transition-delay: 0.5s;

  ${({ visible }: IInnerLabelProps) =>
    visible && `
      opacity: 1;
    `}

  // TODO: figure out a way to reposition first 'community treasure' label
`;

const BarLabel = styled.div`
  bottom: -48px;
  position: absolute;
`;
