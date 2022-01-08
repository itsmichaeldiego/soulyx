import styled from 'styled-components';

import {
  marqueeLeft,
  marqueeRight,
  marqueeLeftMobile,
  marqueeRightMobile,
} from '../styles/animations';

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