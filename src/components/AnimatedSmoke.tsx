import React from 'react'
import styled from 'styled-components'

export function AnimatedSmoke() {
  return (
    <Wrapper>
      <section className="ag-smoke-block">
        <div className="ag-smoke-1">
          <img src="/images/smoke-1.png" alt=""/></div>
        <div className="ag-smoke-1 ag-smoke__delay-1">
          <img src="/images/smoke-1.png" alt=""/></div>
        <div className="ag-smoke-1 ag-smoke__delay-2">
          <img src="/images/smoke-1.png" alt=""/></div>
        <div className="ag-smoke-2">
          <img src="/images/smoke-2.png" alt=""/></div>
        <div className="ag-smoke-2 ag-smoke__delay-1">
          <img src="/images/smoke-2.png" alt=""/></div>
        <div className="ag-smoke-2 ag-smoke__delay-2">
          <img src="/images/smoke-2.png" alt=""/></div>
        <div className="ag-smoke-3"><img src="/images/smoke-3.png" alt=""/></div>
        <div className="ag-smoke-3 ag-smoke__delay-1">
          <img src="/images/smoke-3.png" alt=""/></div>
        <div className="ag-smoke-3 ag-smoke__delay-2">
          <img src="/images/smoke-3.png" alt=""/></div>
        <div className="ag-smoke-4"><img src="/images/smoke-4.png" alt=""/></div>
        <div className="ag-smoke-4 ag-smoke__delay-1">
          <img src="/images/smoke-4.png" alt=""/></div>
        <div className="ag-smoke-4 ag-smoke__delay-2">
          <img src="/images/smoke-4.png" alt=""/></div>
        <div className="ag-format-container"></div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  height: 75%;

  @media ${({ theme }) => theme.media.mobile} {
    height: 50%;
  }

  .ag-format-container {
    width: 100vw;
    margin: 0 auto;
  }

  img {
    max-width: 100%;
  }

  .ag-smoke-block {
    z-index: 4;
    position: relative;
  }

  .ag-smoke-1 {
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;

    animation: an-smoke-1 6s ease-in-out infinite;
  }

  .ag-smoke-2 {
    width: 57.1em;

    z-index: -2;
    top: 7em;
  }

  .ag-smoke-2,
  .ag-smoke-3 {
    position: absolute;
    left: 0;

    animation: an-smoke-2 6s ease-in-out infinite;
  }

  .ag-smoke-3 {
    width: 100%;

    z-index: -4;
    top: -32em;
  }

  .ag-smoke-4 {
    width: 61.4em;

    z-index: -3;
    position: absolute;
    top: 12em;
    right: 0;

    animation: an-smoke-3 6s ease-in-out infinite;
  }
  .ag-smoke__delay-1 {
    animation-delay: 2s;
  }
  .ag-smoke__delay-2 {
    animation-delay: 4s;
  }

  @keyframes an-smoke-1 {
    0% {
      opacity: 0;
      transform: translateY(5%) rotate(.01deg);
    }
    50% {
      opacity: .9;
    }
    to {
      opacity: 0;
      transform: translateY(0) rotate(.01deg);
    }
  }

  @keyframes an-smoke-2 {
    0% {
      opacity: 0;
      transform: translate(-10%, 10%) rotate(.01deg);
    }
    50% {
      opacity: .9;
    }
    to {
      opacity: 0;
      transform: translateY(5%) rotate(.01deg);
    }
  }

  @keyframes an-smoke-3 {
    0% {
      opacity: 0;
      transform: translateY(10%) rotate(.01deg);
    }
    50% {
      opacity: .9;
    }
    to {
      opacity: 0;
      transform: translate(-10%, 5%) rotate(.01deg);
    }
  }
`