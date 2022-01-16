import React from 'react'
import styled from 'styled-components'

const SmokeAnimation = (props: any) => (
  <SmokeWrapper {...props}>
    <section className="ag-smoke-block">
    <div className="ag-smoke-1">
      <img src="/images/smoke-1.png" /></div>
    <div className="ag-smoke-1 ag-smoke__delay-1">
      <img src="/images/smoke-1.png" /></div>
    <div className="ag-smoke-1 ag-smoke__delay-2">
      <img src="/images/smoke-1.png" /></div>
    <div className="ag-smoke-2">
      <img src="/images/smoke-2.png" /></div>
    <div className="ag-smoke-2 ag-smoke__delay-1">
      <img src="/images/smoke-2.png" /></div>
    <div className="ag-smoke-2 ag-smoke__delay-2">
      <img src="/images/smoke-2.png" /></div>
    <div className="ag-smoke-3"><img src="/images/smoke-3.png" /></div>
    <div className="ag-smoke-3 ag-smoke__delay-1">
      <img src="/images/smoke-3.png" /></div>
    <div className="ag-smoke-3 ag-smoke__delay-2">
      <img src="/images/smoke-3.png" /></div>
    <div className="ag-smoke-4"><img src="/images/smoke-4.png" /></div>
    <div className="ag-smoke-4 ag-smoke__delay-1">
      <img src="/images/smoke-4.png" /></div>
    <div className="ag-smoke-4 ag-smoke__delay-2">
      <img src="/images/smoke-4.png" /></div>
    <div className="ag-format-container"></div>
  </section>
  </SmokeWrapper>
)

export function AnimatedSmoke() {
  return (
    <>
      <SmokeAnimation style={{ top: "10%", transform: "rotate(180)"}} />
      <SmokeAnimation style={{ top: "40%" }} />
    </>
  )
}

const SmokeWrapper = styled.div`
  position: absolute;

  .ag-format-container {
    width: 100vw;
    margin: 0 auto;
  }
  
  img {
    max-width: 100%;
  }
  
  body {
    background-color: #000;
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
  
    -webkit-animation: an-smoke-1 6s ease-in-out infinite;
    -moz-animation: an-smoke-1 6s ease-in-out infinite;
    -o-animation: an-smoke-1 6s ease-in-out infinite;
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
  
    -webkit-animation: an-smoke-2 6s ease-in-out infinite;
    -moz-animation: an-smoke-2 6s ease-in-out infinite;
    -o-animation: an-smoke-2 6s ease-in-out infinite;
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
  
    -webkit-animation: an-smoke-3 6s ease-in-out infinite;
    -moz-animation: an-smoke-3 6s ease-in-out infinite;
    -o-animation: an-smoke-3 6s ease-in-out infinite;
    animation: an-smoke-3 6s ease-in-out infinite;
  }
  .ag-smoke__delay-1 {
    -webkit-animation-delay: 2s;
    -moz-animation-delay: 2s;
    -o-animation-delay: 2s;
    animation-delay: 2s;
  }
  .ag-smoke__delay-2 {
    -webkit-animation-delay: 4s;
    -moz-animation-delay: 4s;
    -o-animation-delay: 4s;
    animation-delay: 4s;
  }
  
  @-webkit-keyframes an-smoke-1 {
    0% {
      opacity: 0;
  
      -webkit-transform: translateY(5%) rotate(.01deg);
      transform: translateY(5%) rotate(.01deg);
    }
    50% {
      opacity: .9;
    }
    to {
      opacity: 0;
  
      -webkit-transform: translateY(0) rotate(.01deg);
      transform: translateY(0) rotate(.01deg);
    }
  }
  @-moz-keyframes an-smoke-1 {
    0% {
      opacity: 0;
  
      -moz-transform: translateY(5%) rotate(.01deg);
      transform: translateY(5%) rotate(.01deg);
    }
    50% {
      opacity: .9;
    }
    to {
      opacity: 0;
  
      -moz-transform: translateY(0) rotate(.01deg);
      transform: translateY(0) rotate(.01deg);
    }
  }
  @-o-keyframes an-smoke-1 {
    0% {
      opacity: 0;
  
      -o-transform: translateY(5%) rotate(.01deg);
      transform: translateY(5%) rotate(.01deg);
    }
    50% {
      opacity: .9;
    }
    to {
      opacity: 0;
  
      -o-transform: translateY(0) rotate(.01deg);
      transform: translateY(0) rotate(.01deg);
    }
  }
  @keyframes an-smoke-1 {
    0% {
      opacity: 0;
  
      -webkit-transform: translateY(5%) rotate(.01deg);
      -moz-transform: translateY(5%) rotate(.01deg);
      -o-transform: translateY(5%) rotate(.01deg);
      transform: translateY(5%) rotate(.01deg);
    }
    50% {
      opacity: .9;
    }
    to {
      opacity: 0;
  
      -webkit-transform: translateY(0) rotate(.01deg);
      -moz-transform: translateY(0) rotate(.01deg);
      -o-transform: translateY(0) rotate(.01deg);
      transform: translateY(0) rotate(.01deg);
    }
  }
  
  @-webkit-keyframes an-smoke-2 {
    0% {
      opacity: 0;
  
      -webkit-transform: translate(-10%, 10%) rotate(.01deg);
      transform: translate(-10%, 10%) rotate(.01deg);
    }
    50% {
      opacity: .9;
    }
    to {
      opacity: 0;
  
      -webkit-transform: translateY(5%) rotate(.01deg);
      transform: translateY(5%) rotate(.01deg);
    }
  }
  @-moz-keyframes an-smoke-2 {
    0% {
      opacity: 0;
  
      -moz-transform: translate(-10%, 10%) rotate(.01deg);
      transform: translate(-10%, 10%) rotate(.01deg);
    }
    50% {
      opacity: .9;
    }
    to {
      opacity: 0;
  
      -moz-transform: translateY(5%) rotate(.01deg);
      transform: translateY(5%) rotate(.01deg);
    }
  }
  @-o-keyframes an-smoke-2 {
    0% {
      opacity: 0;
  
      -o-transform: translate(-10%, 10%) rotate(.01deg);
      transform: translate(-10%, 10%) rotate(.01deg);
    }
    50% {
      opacity: .9;
    }
    to {
      opacity: 0;
  
      -o-transform: translateY(5%) rotate(.01deg);
      transform: translateY(5%) rotate(.01deg);
    }
  }
  @keyframes an-smoke-2 {
    0% {
      opacity: 0;
  
      -webkit-transform: translate(-10%, 10%) rotate(.01deg);
      -moz-transform: translate(-10%, 10%) rotate(.01deg);
      -o-transform: translate(-10%, 10%) rotate(.01deg);
      transform: translate(-10%, 10%) rotate(.01deg);
    }
    50% {
      opacity: .9;
    }
    to {
      opacity: 0;
  
      -webkit-transform: translateY(5%) rotate(.01deg);
      -moz-transform: translateY(5%) rotate(.01deg);
      -o-transform: translateY(5%) rotate(.01deg);
      transform: translateY(5%) rotate(.01deg);
    }
  }
  
  @-webkit-keyframes an-smoke-3 {
    0% {
      opacity: 0;
  
      -webkit-transform: translateY(10%) rotate(.01deg);
      transform: translateY(10%) rotate(.01deg);
    }
    50% {
      opacity: .9;
    }
    to {
      opacity: 0;
  
      -webkit-transform: translate(-10%, 5%) rotate(.01deg);
      transform: translate(-10%, 5%) rotate(.01deg);
    }
  }
  @-moz-keyframes an-smoke-3 {
    0% {
      opacity: 0;
  
      -moz-transform: translateY(10%) rotate(.01deg);
      transform: translateY(10%) rotate(.01deg);
    }
    50% {
      opacity: .9;
    }
    to {
      opacity: 0;
  
      -moz-transform: translate(-10%, 5%) rotate(.01deg);
      transform: translate(-10%, 5%) rotate(.01deg);
    }
  }
  @-o-keyframes an-smoke-3 {
    0% {
      opacity: 0;
  
      -o-transform: translateY(10%) rotate(.01deg);
      transform: translateY(10%) rotate(.01deg);
    }
    50% {
      opacity: .9;
    }
    to {
      opacity: 0;
  
      -o-transform: translate(-10%, 5%) rotate(.01deg);
      transform: translate(-10%, 5%) rotate(.01deg);
    }
  }
  @keyframes an-smoke-3 {
    0% {
      opacity: 0;
  
      -webkit-transform: translateY(10%) rotate(.01deg);
      -moz-transform: translateY(10%) rotate(.01deg);
      -o-transform: translateY(10%) rotate(.01deg);
      transform: translateY(10%) rotate(.01deg);
    }
    50% {
      opacity: .9;
    }
    to {
      opacity: 0;
  
      -webkit-transform: translate(-10%, 5%) rotate(.01deg);
      -moz-transform: translate(-10%, 5%) rotate(.01deg);
      -o-transform: translate(-10%, 5%) rotate(.01deg);
      transform: translate(-10%, 5%) rotate(.01deg);
    }
  }
  
  
  @media only screen and (max-width: 767px) {
    .ag-format-container {
      width: 96%;
    }
  
  }
  
  @media only screen and (max-width: 639px) {
  
  }
  
  @media only screen and (max-width: 479px) {
  
  }
  
  @media (min-width: 768px) and (max-width: 979px) {
    .ag-format-container {
      width: 750px;
    }
  
  }
  
  @media (min-width: 980px) and (max-width: 1161px) {
    .ag-format-container {
      width: 960px;
    }
  
  }  
`