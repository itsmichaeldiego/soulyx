import { useState } from 'react';
import React from 'react';
import styled from 'styled-components';

import { useDesktopMediaQuery } from '../../lib/mediaQueryHelper';

import { YearSelect } from './YearSelect';
import { CHART_DATA, Y_AXIS_LABELS } from './data';
import { StackedBar } from './StackedBar';

type Stack = {
  label: string;
  color: string;
  value: number;
  fixedLabel?: boolean;
};

type IChartBarProps = {
  name: string;
  stacks: Stack[];
};

type ChartEntry = {
  name: string;
  stacks: Stack[];
};

function ChartBar({ name, stacks }: IChartBarProps) {
  return <Bar>
    {stacks.map(({ label, color, value, fixedLabel }: Stack, index) => (
      <StackedBar
        key={`${name+label+index}`}
        color={color}
        height={value}
        label={label}
        fixedLabel={fixedLabel}
      />
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
        return entry.name === visible;
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
            <ChartBar name={bar.name} stacks={bar.stacks} />
            {isDesktop && <BarLabel>{bar.name}</BarLabel>}
          </BarWrapper>
        ))}
      </ChartWrapper>
      {!isDesktop && <YearSelect options={selectOptions} selected={visible} onChange={setVisible} />}
    </Wrapper>
	);
};

const Wrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.bg.primary};
  display: flex;
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
  left: 0;
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
  height: 100%;
  justify-content: flex-start;
  margin-top: auto;
  width: 220px;

  @media (max-width: 767px) {
    width: 242px;
  }
`;

const BarLabel = styled.div`
  bottom: -48px;
  position: absolute;
`;
