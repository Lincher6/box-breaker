import styled from 'styled-components/macro'
import armoredBoxImg from 'assets/armoredBox.png'
import {ARMOR_SIZE, BOX_SIZE} from "lib/constants";

export const Container = styled.div`
  position: absolute;
  box-sizing: content-box;
  border: ${({ hp }) => (hp * ARMOR_SIZE) + "px solid #456"};
  width: ${() => BOX_SIZE + 'px'};
  height: ${() => BOX_SIZE + 'px'};
  border-radius: 4px;
  top: ${({ top }) => (top - 6) + 'px'};
  left: ${({ left }) => (left - 6) + 'px'};
  background: url(${armoredBoxImg});
  background-size: contain;
  z-index: 1;
  animation: popUp .5s;
  
  @keyframes popUp {
    0% {transform: scale(0, 0)}
    50% {transform: scale(1.1, 1.1)}
    100% {transform: scale(1, 1)}
  }
`