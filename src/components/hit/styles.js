import styled from 'styled-components/macro'

export const Container = styled.div`
  position: absolute;
  top: ${({ top }) => (top - 27) + 'px'};
  left: ${({ left }) => (left - 27) + 'px'};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid white;
  opacity: 0;
  pointer-events: none;
  animation: shot .6s;
  
  @keyframes shot {
    0% {transform: scale(0, 0); opacity: 1}
    100%{transform: scale(1, 1); opacity: 0}
  }
`