import { useState, useCallback, useRef } from 'react';
import React from 'react';
import styled from 'styled-components';

import { Icon } from '../Icon';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

type IRoadmapYearSelectProps = {
  selected: string;
  onChange: (selected: string) => void;
  options: string[];
};

type IMenuWrapperProps = {
  height: number;
}

type IIconWrapperProps = {
  open: boolean;
}

export function RoadmapYearSelect({ selected, options, onChange }: IRoadmapYearSelectProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuHeight = (options.length) * 40;
  const clickOutsideRef = useRef(null);

  const handleClickOutside = () => {
    setIsMenuOpen(false);
  };

  const handleChange = useCallback((selected) => {
    onChange(selected)
  }, [onChange]);

  const toggle = useCallback(() => {
    setIsMenuOpen(v => !v);
  }, []);

  useOnClickOutside(clickOutsideRef, handleClickOutside);

  return <>
    {/* TODO: Consume color from theme */}
    <ClickOutsideWrapper ref={clickOutsideRef}>
      <SelectToggle onClick={toggle}>
        {selected}
        <IconWrapper open={isMenuOpen} icon="arrow-down" color="white" />
      </SelectToggle>
      {isMenuOpen && (
        <MenuWrapper height={menuHeight}>
          {options.map(option => (
            <MenuOption onClick={() => handleChange(option)} key={option}>{option}</MenuOption>
          ))}
        </MenuWrapper>
      )}
    </ClickOutsideWrapper>
  </>
}

const ClickOutsideWrapper = styled.div`
  width: 100%;
`;

const SelectToggle = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.cta.primary};
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  color: white;
  display: flex;
  font-size: 12px;
  font-weight: bold;
  height: 66px;
  justify-content: space-between;
  padding: 0 16px;
  position: relative;
`;

const IconWrapper = styled(Icon)`
  ${({ open }: IIconWrapperProps) =>
    open && `
      transform: rotate(-180deg);
    `}
`;

const MenuWrapper = styled.div`
  background-color: ${({ theme }) => theme.cta.secondary};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.cta.primary};
  display: flex;
  flex-direction: column;
  font-size: 12px;
  left: 0px;
  position: absolute;
  width: 100%;

  ${({ height }: IMenuWrapperProps) =>
    height && `
      bottom: -${height}px;
      height: ${height}px;
    `}
`;

const MenuOption = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.cta.primary};
  display: flex;
  height: 40px;
  padding-left: 16px;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.cta.primary};
  }
`;
