import { keyframes } from 'styled-components';

export const flickerAnimation = keyframes`
  0%   { opacity:1; }
  50%  { opacity:.4; }
  100% { opacity:1; }
`;

export const simpleMarquee = keyframes`
  0% {
    background-position: 100vw;
  }

  100% {
    background-position: -100vw;
  }
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