import React, { useContext } from "react";
import { ThemeContext } from 'styled-components';

import { ICONS } from '../lib/iconsLib'

interface IIconProps {
  // props
  icon: string;
  style?: React.CSSProperties
  className?: string;
  // svg props:
  size?: number;
  color?: string;
  viewBox?: string;
};

const defaultStyles = { display: "inline-block", verticalAlign: "middle" };

export const Icon = ({ size, color, icon, className, style, viewBox }: IIconProps) => {
  const theme = useContext(ThemeContext);
  const styles = { ...defaultStyles, ...style };
  return (
    <svg
      className={className}
      style={styles}
      viewBox={viewBox}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      {ICONS[icon].map((path, idx) => <path key={`icon-${encodeURI(`${path},${idx}`)}`} fill={color || theme.cta.primary} d={path} />)}
    </svg>
  );
};

Icon.defaultProps = {
  size: 16,
  color: undefined,
  viewBox: "0 0 16 16",
  style: {},
  className: "",
};

