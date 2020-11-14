import React from 'react'
import styled from "styled-components/macro";
import {useContextState} from "../context/Context";

const Container = styled.div`
  padding: 5px 15px;
  background-color: darkcyan;
  border-radius: 4px;
  color: white;
  text-align: center;
  font-family: DigitalClock;
  font-size: 32px;
  min-width: 200px;
`

export const Score = () => {
    const { score } = useContextState()

    return (
        <Container>
            Score: {score}
        </Container>
    )
}