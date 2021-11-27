import { useLayoutEffect, useState, useCallback, useContext } from 'react';
import React from 'react';
import styled from 'styled-components';
import { CHART_DATA, Y_AXIS_LABELS } from './data';
import { useDesktopMediaQuery } from '../../lib/mediaQueryHelper';
import { Icon } from '../Icon';

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

// TODO: Move this
type IEntrySelectProps = {
  active: string;
  onChange: (selected: string) => void;
};

function EntrySelect({ active, onChange }: IEntrySelectProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleChange = useCallback((selected) => {
    onChange(selected)
  }, [onChange]);

  return <>
    {/* TODO: Change icon + consume theme */}
    <SelectToggle>{active}<Icon icon="chevrons-up" color="white" /></SelectToggle>
    {isMenuOpen && (
      // menu logic goes here
      <></>
    )}
  </>
}

const SelectToggle = styled.div`
  display: flex;
  position: absolute;
  bottom: -66px;
  height: 66px;
  justify-content: space-between;
  width: 100%;
  background-color: ${({ theme }) => theme.cta.primary};
  color: white;
`

function ChartBar({ stacks }: IChartBarProps) {
  const [visible, setVisible] = useState(false);
  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      setVisible(true);
    })
  }, []);

  return <Bar visible={visible}>
    {stacks.map(({ label, color, value }: Stack) => (
      <StackedBar
        key={label}
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
  const [visible, setVisible] = useState(isDesktop ? 'all' : '2024');

  const mappedData = (data: ChartEntry[]) => {
    if (visible === 'all') {
      return data;
    } else {
      return data.filter(entry => {
        return entry.name === visible
      });
    }
  }

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
        {mappedData(CHART_DATA)?.map((bar, index) => (
          <BarWrapper key={index}>
            <ChartBar stacks={bar.stacks} />
            {isDesktop && <BarLabel>{bar.name}</BarLabel>}
          </BarWrapper>
        ))}
      </ChartWrapper>
      {!isDesktop && <EntrySelect active={visible} onChange={setVisible} />}
    </Wrapper>
	);
};

const Wrapper = styled.div`
  align-items: center;
  background-color: #E5E5E5;
  display: flex;
  height: 640px;
  text-transform: uppercase;

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
`;

const YAxisTopLabel = styled.span`
  position: absolute;
  top: -30px;
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
