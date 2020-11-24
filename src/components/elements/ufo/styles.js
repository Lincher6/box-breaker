import styled from 'styled-components/macro'
import ufoImg from 'assets/UFO.png'

const width = window.innerWidth

export const Container = styled.div`
   position: absolute;
   top: 100px;
   width: 70px;
   height: 45px;
   background: url(${ufoImg});
   background-size: cover;
   filter: hue-rotate(0);
   animation: ufo 2s infinite linear, fly 15s;
   z-index: 3;
   
   @keyframes ufo {
     0%{filter: hue-rotate(0deg); transform: rotate(0)}
     25%{transform: rotate(15deg)}
     50%{transform: rotate(0deg)}
     75%{transform: rotate(-15deg)}
     100%{filter: hue-rotate(360deg); transform: rotate(0)}
   }
   
   @keyframes fly {
     0%{left: -100px}
     100%{left: ${width + 'px'}}
   }
   
   &.stop {
    animation-play-state: paused;
    -webkit-animation-play-state: paused;
    -o-animation-play-state: paused;
    -moz-animation-play-state: paused;
  }
`