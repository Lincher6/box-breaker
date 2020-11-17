import styled from 'styled-components/macro'
import {BACKGROUND} from "../../lib/constants";

export const Container = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  width: 300px;
  
  @media (max-width: 1000px) {
    position: absolute;
    right: -1000px;
    justify-content: center;
    padding: 10px 50px;
    background-color: ${() => BACKGROUND};
    width: 100vw;
    height: 100vh;
    transition: right .5s;
  }
`

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