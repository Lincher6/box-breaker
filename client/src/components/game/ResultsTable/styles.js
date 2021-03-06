import styled from 'styled-components/macro'
import {PRIMARY, SECONDARY, SUB} from 'lib/constants';

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  overflow-y: auto;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const Table = styled.div`
  animation: appear .5s;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  color: firebrick;
  font-family: DigitalClock, serif;
  margin-bottom: 20px;
`;

export const SubText = styled.h3`
  opacity: .7;
`;

export const Record = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 5px 10px;
  color: ${({ active }) => active ? PRIMARY : 'inherit'};
  
  &:first-of-type {
    font-size: 1.2em;
    border-bottom: 1px solid ${() => SUB};
  }
`;

export const Name = styled.div`
  opacity: .8;
`;

export const Score = styled.div`
  color: ${SECONDARY};
`;