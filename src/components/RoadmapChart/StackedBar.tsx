import { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';

type IStackedBarProps = {
  label: string;
  color: string;
  height: number;
};

type IStackedBarWrapperProps = {
  height: number;
  color?: string;
  visible: boolean;
};

type IInnerLabelProps = {
  visible: boolean;
  // God knows this shouldn't exist
  shouldPosition: boolean;
};

export function StackedBar( { label, color, height }: IStackedBarProps) {
  const [visible, setVisible] = useState(false);
  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      setVisible(true);
    })
  }, []);

  return <StackedBarWrapper
    color={color}
    height={height}
    visible={visible}
  >
    <InnerLabel visible={visible} shouldPosition={height > 6}>{label}</InnerLabel>
  </StackedBarWrapper>
}

const StackedBarWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 0%;
  padding-left: 12px;
  position: relative;
  transition: height 0.5s linear;

  ${({ color, height, visible }: IStackedBarWrapperProps) =>
    visible && `
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