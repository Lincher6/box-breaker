import styled from "styled-components/macro";
import {SUB} from "lib/constants";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: DigitalClock, serif;
  margin: 10px;
  padding: 5px 15px;
  min-width: 100px;
  background-color: ${() => SUB};
  border-radius: 4px;
  font-size: 32px;
  color: white;
  font-variant-numeric: lining-nums;
`