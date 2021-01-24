import styled from 'styled-components/macro';
import {SUB, SECONDARY} from 'lib/constants';

export const Container = styled.div`
  font-family: DigitalClock, serif;
  margin: 10px;
  padding: 5px 15px;
  background-color: ${SUB};
  border-radius: 4px;
  color: white;
  font-size: 2rem;
  min-width: 170px;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  @media(max-width: 1000px) {
    min-width: 0;
  }
`;

export const Counter = styled.span`
  color: ${SECONDARY};
`;
