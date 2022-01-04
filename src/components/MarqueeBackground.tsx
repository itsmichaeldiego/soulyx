import styled, { keyframes } from 'styled-components';

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

export const MarqueeBackground = styled.div`
  height: 425px;
  position: relative;
  background-image: url(${({ url }: { url: string }) => url});
  background-size: cover;
  background-repeat: no-repeat;
  margin: ${({ theme }) => theme.spacing(2, 0)};

  @media ${({ theme }) => theme.media.mobile} {
    height: 234px;
  }
`;

export const MarqueeBackgroundLeft = styled(MarqueeBackground)`
  animation: ${marqueeLeft} 30s linear infinite;
  @media ${({ theme }) => theme.media.mobile} {
    animation: ${marqueeLeftMobile} 20s linear infinite;
  }
`

export const MarqueeBackgroundRight = styled(MarqueeBackground)`
  animation: ${marqueeRight} 30s linear infinite;
  @media ${({ theme }) => theme.media.mobile} {
    animation: ${marqueeRightMobile} 20s linear infinite;
  }
`