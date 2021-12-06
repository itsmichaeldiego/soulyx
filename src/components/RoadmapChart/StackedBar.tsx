import { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';

type IStackedBarProps = {
  label: string;
  color: string;
  height: number;
  fixedLabel?: boolean;
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
  fixedLabel?: boolean;
};

export function StackedBar({ label, color, height, fixedLabel }: IStackedBarProps) {
  const [visible, setVisible] = useState(false);
  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      setVisible(true);
    });
  }, []);

  return (
    <StackedBarWrapper
      color={color}
      height={height}
      visible={visible}
    >
      <InnerLabel visible={visible} shouldPosition={height > 6} fixedLabel={fixedLabel}>{label}</InnerLabel>
    </StackedBarWrapper>
  );
}

const StackedBarWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 0%;
  padding-left: 12px;
  position: relative;
  transition: height 0.5s ease-in-out;

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
  line-height: 17px;
  opacity: 0;
  transition: opacity 0.5s ease-in;
  transition-delay: 0.5s;

  ${({ shouldPosition, fixedLabel }: IInnerLabelProps) =>
   shouldPosition && !fixedLabel && `
      left: 12px;
      position: absolute;
      top: 8px;
    `}

  ${({ fixedLabel }: IInnerLabelProps) =>
    fixedLabel && `
      align-self: flex-end;
      padding-bottom: 8px;
    `}

  ${({ visible }: IInnerLabelProps) =>
    visible && `
      opacity: 1;
    `}
`;