import styled from "styled-components/macro";
import {SUB} from "lib/constants";

export const Container = styled.div`
  font-family: DigitalClock, serif;
  margin: 10px;
  padding: 5px 15px;
  min-width: 100px;
  background-color: ${() => SUB};
  border-radius: 4px;
  font-size: 32px;
  color: white;
  text-align: center;
  font-variant-numeric: lining-nums;
`