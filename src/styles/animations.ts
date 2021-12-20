import { keyframes } from "styled-components";


export const marqueeLeft = keyframes`
  0% {
    background-position: 2200px;
  }

  100% {
    background-position: -2200px;
  }
`;

export const marqueeRight = keyframes`
  0% {
    background-position: -2200px;
  }

  100% {
    background-position: 2200px;
  }
`;