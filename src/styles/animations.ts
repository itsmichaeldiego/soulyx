import { keyframes } from "styled-components";


export const marqueeLeft = keyframes`
  0% {
    background-position: 100vw;
  }

  100% {
    background-position: -100vw;
  }
`;

export const marqueeRight = keyframes`
  0% {
    background-position: -100vw;
  }

  100% {
    background-position: 100vw;
  }
`;