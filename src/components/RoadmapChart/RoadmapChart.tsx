import React from 'react';
import styled from 'styled-components';

type IInnerBarProps = {
  height: number;
  color?: string;
};

type IInnerLabelProps = {
  // God knows this shouldn't exist 
  shouldPosition: boolean;
};

const calculateHeight = (value: number) => {
  // Based on highest value (40%)
  return value * 100 / 40;
};

const data = [
  {
    name: "2021",
    attributes: [
      { value: calculateHeight(2), label: "Airdrop", color: "#EEDBD6" },
      { value: calculateHeight(10), label: "IDO + LP", color: "#F2B8AB" },
      { value: calculateHeight(5), label: "Investors", color: "#E5E5E5" },
    ]
  },
  {
    name: "2022",
    attributes: [
      { value: calculateHeight(2), label: "Airdrop", color: "#EEDBD6" }, 
      { value: calculateHeight(11), label: "Team", color: "#F2B8AB" },
      { value: calculateHeight(12.5), label: "Partners", color: "#E5E5E5" },
    ]
  },
  {
    name: "2023",
    attributes: [
      { value: calculateHeight(10), label: "Community Treasure", color: "#EEDBD6" },
      { value: calculateHeight(1.5), label: "Airdrop", color: "#F2B8AB" },
      { value: calculateHeight(7.5), label: "Team", color: "#F6A897" },
      { value: calculateHeight(9), label: "Partners", color: "#E5E5E5" },
    ]
  },
  {
    name: "2024",
    attributes: [
      { value: calculateHeight(30), label: "Community Treasure", color: "#F6A897" },
      { value: calculateHeight(2.5), label: "Airdrop", color: "#E5E5E5" },
    ]
  },
];

const yAxis = ['0.0%', '10%', '20%', '30%'];

export function RoadmapChart() {
	return (
    <Wrapper>
      <ChartWrapper>
        <GridWrapper>
          {/* We use four rows to calculate bar heights up to 40% */}
          {yAxis.map(label => (
            <GridRow key={label}>
              {label}
            </GridRow>
          ))}
          {/* So 40% falls off, this is a way to display the label */}
          <YAxisTopLabel>40%</YAxisTopLabel>
        </GridWrapper>
        {data.map((bar, index) => (
          <BarWrapper key={index}>
            <Bar>
              {bar.attributes.map(attr => (
                <InnerBar 
                  key={attr.label}
                  color={attr.color}
                  height={attr.value}
                >
                  <InnerLabel shouldPosition={attr.value > 6}>{attr.label}</InnerLabel>
                </InnerBar>
              ))}
            </Bar>
            <BarLabel>{bar.name}</BarLabel>
          </BarWrapper>
        ))}
      </ChartWrapper>
    </Wrapper>
	);
};

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 640px;
  text-transform: uppercase;
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
  height: 100%;
  justify-content: flex-start;
  width: 220px;
`;

const InnerBar = styled.div`
  align-items: center;
  display: flex;
  padding-left: 12px;
  position: relative;

  ${({ height, color }: IInnerBarProps) => `
    background-color: ${color};
    height: ${height}%;
  `}

  // borders (...)
  border-right: 1px solid ${({ theme }) => theme.cta.primary};
  border-left: 1px solid ${({ theme }) => theme.cta.primary};

  &:not(:first-of-type) {
    border-bottom: 1px dashed ${({ theme }) => theme.cta.primary};
  }

  &:first-of-type {
    border-bottom: 1px solid ${({ theme }) => theme.cta.primary};
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
`;

const BarLabel = styled.div`
  bottom: -48px;
  position: absolute;
`;
