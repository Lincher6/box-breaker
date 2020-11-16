import React from 'react'
import styled from "styled-components/macro";
import {useContextState} from "../context/Context";
import {SUB} from "../constants";

const Container = styled.div`
  font-family: DigitalClock;
  margin: 10px;
  padding: 5px 15px;
  background-color: ${() => SUB};
  border-radius: 4px;
  color: white;
  text-align: center;
  font-size: 32px;
  min-width: 170px;
`

export const Score = () => {
    const { score } = useContextState()

    return (
        <Container>
            Score: {score}
        </Container>
    )
}