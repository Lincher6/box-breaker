import styled from "styled-components/macro";
import {SUB} from "lib/constants";

export const Container = styled.div`
  font-family: DigitalClock, serif;
  margin: 10px;
  padding: 5px 15px;
  background-color: ${() => SUB};
  border-radius: 4px;
  color: white;
  text-align: center;
  font-size: 32px;
  min-width: 170px;
`