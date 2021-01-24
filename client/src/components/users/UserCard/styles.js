import styled from 'styled-components/macro';
import { SUB } from 'lib/constants';

export const Container = styled.div`
  border-top: 1px ridge ${SUB};
  padding: 10px;
`

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
`