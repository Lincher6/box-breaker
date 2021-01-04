import styled from "styled-components/macro";
import {SUB} from "lib/constants";

export const Container = styled.input`
  outline: none;
  border: none;
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  width: 120px;
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
  overflow: hidden;
`;