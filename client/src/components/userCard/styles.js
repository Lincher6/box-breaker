import styled from 'styled-components/macro';
import {PRIMARY, SUB} from "lib/constants";

export const Container = styled.div`
  border-top: 1px ridge ${SUB};
  padding: 10px;
`

export const Span = styled.span`
  margin: 0 5px;
  color: ${({ color }) => color};
`

export const Controls = styled.div`
  display: flex;
  justify-content: flex-end;
`