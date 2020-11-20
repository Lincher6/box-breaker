import styled from "styled-components/macro"

export const Container = styled.div`
  opacity: 0;
  position: absolute;
  color: orange;
  top: ${({ top }) => (top - 60) + 'px'};
  left: ${({ left }) => (left - 20) + 'px'};
  font-size: 2em;
  animation: pointsPopUp 1.5s;
  
  @keyframes pointsPopUp {
    0%{transform: translate(0, 0); opacity: 1; display: block}
    100%{transform: translate(0, -20px); opacity: 0; display: none}
  }
`