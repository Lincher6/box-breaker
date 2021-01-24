import styled from 'styled-components/macro';
import armoredBoxImg from 'assets/armoredBox.png';
import { INITIAL_ARMOR, ARMOR_SIZE, BOX_SIZE } from 'lib/constants';

export const Container = styled.div`
  position: absolute;
  box-sizing: content-box;
  border: ${({ hp }) => (hp * ARMOR_SIZE) + 'px ridge silver'};
  width: ${() => BOX_SIZE + 'px'};
  height: ${() => BOX_SIZE + 'px'};
  border-radius: 4px;
  top: ${({ top }) => (top - INITIAL_ARMOR * ARMOR_SIZE) + 'px'};
  left: ${({ left }) => (left - INITIAL_ARMOR * ARMOR_SIZE) + 'px'};
  background: url(${armoredBoxImg});
  background-size: contain;
  z-index: 1;
  animation: popUp .5s;
  
  @keyframes popUp {
    0% {transform: scale(0, 0)}
    50% {transform: scale(1.1, 1.1)}
    100% {transform: scale(1, 1)}
  }
`;