import styled from "styled-components/macro";
import {PRIMARY, SECONDARY, SUB} from "lib/constants";

export const Container = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  flex-grow: 1;
  border: 1px solid ${() => SUB};
  cursor: crosshair;
  overflow: hidden;
  border-radius: 5px;
  pointer-events: ${({active}) => active ? 'auto' : 'none'};
  background-color: #0e1621;
  opacity: ${({isPaused}) => isPaused ? .5 : 1};
`;

export const PauseScreen = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  content: 'PAUSE';
`

export const PauseText = styled.span`
  font-size: 3rem;
  font-family: sans-serif;
  font-weight: bold;
  color: ${PRIMARY};
  text-shadow: -3px 3px 0 ${SECONDARY};
  animation: pause 2s linear infinite;
  
  @keyframes pause {
    0%{filter: hue-rotate(0deg); transform: rotate(0)}
    25%{transform: rotate(5deg)}
    50%{transform: rotate(0deg)}
    75%{transform: rotate(-5deg)}
    100%{filter: hue-rotate(360deg); transform: rotate(0)}
  }
  
`
