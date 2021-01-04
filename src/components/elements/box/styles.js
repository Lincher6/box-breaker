import styled from 'styled-components/macro';
import boxImg from 'assets/box.png';
import {BOX_SIZE} from "lib/constants";

export const Container = styled.div`
  position: absolute;
  width: ${BOX_SIZE + 'px'};
  height: ${BOX_SIZE + 'px'};
  border-radius: 4px;
  top: ${({ top }) => top + 'px'};
  left: ${({ left }) => left + 'px'};
  background: url(${boxImg});
  filter: hue-rotate(${() => Math.floor(Math.random() * 360) + 'deg' });
  background-size: contain;
  animation: popUp .5s;
  
  @keyframes popUp {
    0% {transform: scale(0, 0)}
    50% {transform: scale(1.1, 1.1)}
    100% {transform: scale(1, 1)}
  }
`;