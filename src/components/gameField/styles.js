import styled from "styled-components/macro";
import {SUB} from "lib/constants";

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
`
