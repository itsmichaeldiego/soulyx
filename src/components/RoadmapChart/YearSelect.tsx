import { useState, useCallback, useRef } from 'react';
import React from 'react';
import styled from 'styled-components';

import { Icon } from '../Icon';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

type IYearSelectProps = {
  selected: string;
  onChange: (selected: string) => void;
  options: string[];
}

type IMenuWrapperProps = {
  height: number;
}

type IIconWrapperProps = {
  open: boolean;
}

const OPTION_HEIGHT = 60;

export function YearSelect({ selected, options, onChange }: IYearSelectProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuHeight = (options.length) * OPTION_HEIGHT;
  const clickOutsideRef = useRef(null);

  const handleClickOutside = () => {
    setIsMenuOpen(false);
  };

  const handleChange = useCallback((selected) => {
    onChange(selected);
    setIsMenuOpen(false);
  }, [onChange]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(v => !v);
  }, []);

  useOnClickOutside(clickOutsideRef, handleClickOutside);

  return <>
    {/* TODO: Consume color from theme */}
    <ClickOutsideWrapper ref={clickOutsideRef}>
      <SelectToggle onClick={toggleMenu}>
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
  transition-duration: 0.1s;
  ${({ open }: IIconWrapperProps) =>
    open && `
      transform: rotate(180deg);
    `}
`;

const MenuWrapper = styled.ul`
  background-color: ${({ theme }) => theme.cta.secondary};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.cta.primary};
  display: flex;
  flex-direction: column;
  font-size: 12px;
  left: 0px;
  margin: 0;
  padding: 0;
  width: 100%;
  transition: all 0.3s ease-in;

  ${({ height }: IMenuWrapperProps) =>
    height && `
      bottom: -${height}px;
      height: ${height}px;
    `}
`;

const MenuOption = styled.li`
  align-items: center;
  color: ${({ theme }) => theme.cta.primary};
  display: flex;
  height: ${OPTION_HEIGHT}px;
  padding-left: 16px;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.cta.primary};
  }

  &:focus, :active, :visited {
    background-color: ${({ theme }) => theme.cta.primary};
    color: white;
  }
`;
