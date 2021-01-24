import styled from 'styled-components/macro';
import {SUB} from 'lib/constants';

export const Container = styled.div`
  position: absolute;
  top: 5%;
  left: 5%;
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  align-items: center;
  background: ${SUB};
  border-radius: 30px;
  border: 2px solid burlywood;
  animation: fromCenter .5s ease-out;
  
  @keyframes fromCenter {
    0%{transform: scale(0, 0)}
    60%{transform: scale(1.3, 1.3)}
    100%{transform: scale(1, 1)}
  }
`

export const Toggle = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  right: 10px;
  top: 10px;
  padding: 3px;
  z-index: 1;
  cursor: pointer;
  
  @media(max-width: 1000px) {
    right: 35px;
  }
  
`