import styled from 'styled-components/macro'
import {BACKGROUND} from "../../lib/constants";

export const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 300px;
  
  @media (max-width: 1000px) {
    display: none;
    position: absolute;
    justify-content: center;
    padding: 10px 50px;
    background-color: ${BACKGROUND};
    width: 100vw;
    height: 100vh;
    z-index: 10;
    
    &.show {
      display: block;
      right: 0;
      animation: sidebar .5s;
    }
    
    @keyframes sidebar {
      0% {right: -1000px}
      100% {right: 0}
    }
  }
`;

export const Toggle = styled.div`
  display: none;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  font-size: 1.5em;
  
  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 1000;
  }
`