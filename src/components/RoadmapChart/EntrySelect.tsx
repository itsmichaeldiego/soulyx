import { useState, useCallback } from 'react';
import React from 'react';
import styled from 'styled-components';

import { Icon } from '../Icon';

type IEntrySelectProps = {
  active: string;
  onChange: (selected: string) => void;
};

const TOGGLE_HEIGHT = 66;

export function EntrySelect({ active, onChange }: IEntrySelectProps) {
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
  align-items: center;
  background-color: ${({ theme }) => theme.cta.primary};
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  bottom: -${TOGGLE_HEIGHT}px;
  color: white;
  display: flex;
  height: ${TOGGLE_HEIGHT}px;
  justify-content: space-between;
  padding: 0 16px;
  position: absolute;
  width: 100%;
  font-size: 12px;
  font-weight: bold;
`;

const MenuWrapper = styled.div`
`