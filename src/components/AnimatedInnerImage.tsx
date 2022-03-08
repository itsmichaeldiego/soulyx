import React from 'react';
import styled from 'styled-components';

type IAnimatedInnerImageProps = React.PropsWithChildren<{
  position?: string;
}>

export function AnimatedInnerImage({ position = 'right', children }: IAnimatedInnerImageProps) {
  return (
    <ImageWrapperOuter>
      <div data-scroll data-scroll-speed="1">
        <ImageWrapperInner position={ position }>
          {children}
        </ImageWrapperInner>
      </div>
    </ImageWrapperOuter>
  )
}

const ImageWrapperOuter = styled.div`
  overflow: hidden;
  width: fit-content;
`

const ImageWrapperInner = styled.div`
  transform: scale(1.3);
  transform-origin: right;

  ${({ position }: IAnimatedInnerImageProps) =>
    position && `
      transform-origin: ${position};
    `}
`