import { keyframes } from 'styled-components';

export const zoomAnimation = keyframes`
  0%   { opacity:1; }
  50%  { opacity:.4; }
  100% { opacity:1; }
`;

export const flickerAnimation = keyframes`
  0%   { background-size: 95%%; }
  50%  { background-size: 100%; }
  100% { background-size: 95%%; }
`;

export const marqueeLeft = keyframes`
  0% {
    background-position: 1880px;
  }

  100% {
    background-position: -1880px;
  }
`;

export const marqueeRight = keyframes`
  0% {
    background-position: -2367px;
  }

  100% {
    background-position: 2367px;
  }
`;

export const marqueeLeftMobile = keyframes`
  0% {
    background-position: 1035px;
  }

  100% {
    background-position: -1035px;
  }
`;

export const marqueeRightMobile = keyframes`
  0% {
    background-position: -1303px;
  }

  100% {
    background-position: 1303px;
  }
`;